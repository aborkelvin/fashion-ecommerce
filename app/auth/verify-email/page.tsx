"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { loginSuccess } from "@/app/store/slices/authSlice";
import OtpInput from "react-otp-input";
import { baseUrl } from "../_components/AuthLayout";

const OTPPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [otp, setOtp] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const searchParams = useSearchParams();
    const email = searchParams.get("email");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(otp);        
        if (otp.length !== 4) {
            toast.error("Please enter a valid OTP");
            return;
        }

        setIsLoading(true);
        const toastId = toast.loading("Verifying...");
        try {
            const response = await fetch(`${baseUrl}/verifyOtp`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                },
                body: JSON.stringify({
                    otp: otp,
                    email: email,
                }),
            });
            const result = await response.json();
            console.log(result);
            if (result.status === 200) {
                dispatch(loginSuccess({ user: result.data.user, token: result.data.token }));
                localStorage.setItem("token", result.data.token);
                toast.success("OTP verified successfully!");
                router.push("/");
            } else {
                toast.error("Invalid OTP");
            }
        } catch (error) {
            toast.error("Verification failed!");
        } finally {
            toast.dismiss(toastId);
            setIsLoading(false);
        }
    };

    const handleResendOtp = async () => {
        const toastId = toast.loading("Sending OTP...");
        try {        
            setIsLoading(true);
            const response = await fetch(`${baseUrl}/resendOtp`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                }),
            });
            const result = await response.json();
            console.log(result);
            if (result.status === 200) {
                toast.success("OTP sent successfully!");
            } else {
                toast.error(result.data);
            }
        } catch (error) {
            toast.error("Failed to send OTP");
        } finally {
            setIsLoading(false);
            toast.dismiss(toastId);
        }
    };

    return (
        <div className="flex items-center justify-center p-5 min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
                <h1 className="text-2xl font-semibold mb-4 text-center">Enter OTP</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="">
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            renderInput = {(props) => <input {...props} /> }
                            renderSeparator = {<span style={{ width: "8px" }}></span>}
                            inputStyle = {{
                                marginBottom:"",
                                width: "46px",
                                marginInline:"auto",
                                height: "40px",
                                border: "1px solid #000",
                                borderRadius:"5.3px",
                                //padding: "13px 20px",
                                outline: "none",
                                textAlign: "center",
                                fontSize:  "14px",
                                fontWeight: "700",
                                background: "#F9F9F9",
                                caretColor: "#38CB89"                        
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary-green text-white py-2 rounded-lg hover:bg-green-600"
                        disabled={isLoading}
                    >
                        {isLoading ? "Verifying..." : "Verify OTP"}
                    </button>
                </form>
                <p className="text-center mt-4 text-sm text-secondary-grey">
                    Didn’t receive an OTP?{" "}
                    <button
                        onClick={handleResendOtp}
                        className="text-primary-green hover:underline"
                        disabled={isLoading}
                    >
                        Resend OTP
                    </button>
                </p>
                <Toaster />
            </div>
        </div>
    );
};

export default OTPPage;
