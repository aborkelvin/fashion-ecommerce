"use client";

import { loginSuccess } from "@/app/store/slices/authSlice";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

interface FormData {

    name?: string;
    username?: string;
    email: string;
    password: string;
    password_confirmation?: string;
    termsAccepted?: boolean;
}

export const baseUrl = "https://app.predictifsports.com/api";

const AuthLayout = ({ page }: { page: "login" | "signup" }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        termsAccepted: false,
    });
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();        
        const endpoint = page === "signup" ? "register" : "login";
        
        //Input validation
        if (page === "signup") {
            if (!formData.email || !formData.username || !formData.password || !formData.password_confirmation) {
                toast.error("Email, username and password are required");
                return;
            }
        }
        if (page === "login") {
            if (!formData.email || !formData.password) {
                toast.error("Email and password are required");
                return;
            }
        }

        
        // Api doesnt need these fields
        delete formData.termsAccepted;
        delete formData.name;
        if (page === "login") {            
            delete formData.username;
            delete formData.password_confirmation;
        }
        console.log("Form submitted:", formData);
        
        
        // Api call
        setIsLoading(true);
        const toastId = toast.loading("Processing...");
        try {
            const response = await fetch(`${baseUrl}/${endpoint}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            console.log(result);
            if (result.status == 201 || result.status == 200) {
                if (page == "login") {
                    toast.success("Success!");
                    dispatch(loginSuccess({ user: result.data.user, token: result.data.token }));
                    localStorage.setItem("token", result.data.token);
                    router.push("/");
                } else {
                    toast.success("Success! Please check your email for verification");
                    router.push(`/auth/verify-email?email=${formData.email}`);
                }
            } else if (result.status == 403) {
                toast.error(result.data);
            }else{
                page == "signup"? toast.error(result.message) : toast.error("Invalid credentials");
            }
            
        } catch (error) {
            console.log(`${page} failed`);
            toast.error("Failed!");
        } finally {
            toast.dismiss(toastId);
            setIsLoading(false);
        }
    };

    return (
        <div className="md:h-screen flex items-center justify-center bg-gray-100">
            <div className="flex flex-col md:flex-row bg-white overflow-hidden w-full h-full">
                {/* Left Section: Image */}
                <div className="block w-full md:w-1/2 flex-1 bg-gray-50 relative">
                    <picture>
                        <source srcSet="/images/auth/auth-bg.png" media="(min-width: 1024px)" />
                        <source srcSet="/images/auth/auth-bg-mobile.png" media="(max-width: 1023px)" />
                        <img
                            src="/images/hero.png"
                            alt="Golf clubs"
                            className="w-full h-full object-cover"
                        />
                    </picture>
                    <h2 className="text-2xl font-medium absolute left-1/2 transform -translate-x-1/2 top-8">
                        3legant.
                    </h2>
                </div>

                {/* Right Section: Form */}
                <div className="w-full md:w-1/2 px-4 py-5 phones:px-8 phones:py-10 flex-1 md:flex md:items-center md:justify-center">
                    <div className="w-full max-w-[600px]">
                        <h1 className="text-4xl font-semibold mb-4">
                            {page === "signup" ? "Sign up" : "Sign in"}
                        </h1>
                        <p className="text-secondary-grey mb-6">
                            {page === "signup" ? (
                                <>
                                Already have an account?{" "}
                                <Link
                                    href="/auth/login"
                                    className="text-primary-green hover:underline"
                                >
                                    Sign in
                                </Link>
                                </>
                            ) : (
                                <>
                                Don’t have an account?{" "}
                                <Link
                                    href="/auth/signup"
                                    className="text-primary-green hover:underline"
                                >
                                    Sign up
                                </Link>
                                </>
                            )}
                        </p>

                        <form className="space-y-6 " onSubmit={handleSubmit}>
                            {page === "signup" && (
                                <>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="w-full py-2 border-b border-b-[#E8ECEF] focus:outline-none placeholder-secondary-grey"
                                />
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="Username"
                                    className="w-full py-2 border-b border-b-[#E8ECEF] focus:outline-none placeholder-secondary-grey"
                                />
                                </>
                            )}

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email address"
                                className="w-full py-2 border-b border-b-[#E8ECEF] focus:outline-none placeholder-secondary-grey"
                            />
                            <div className="relative">
                                <input
                                type={isPasswordVisible ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="w-full py-2 border-b border-b-[#E8ECEF] focus:outline-none placeholder-secondary-grey"
                                />
                                {isPasswordVisible ? (
                                <EyeOff
                                    onClick={() => setIsPasswordVisible(false)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                />
                                ) : (
                                <Eye
                                    onClick={() => setIsPasswordVisible(true)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                />
                                )}
                            </div>
                            { page === "signup" &&(
                                <div className="relative">
                                    <input
                                        type={isPasswordVisible ? "text" : "password"}
                                        name="password_confirmation"
                                        value={formData.password_confirmation}
                                        onChange={handleChange}
                                        placeholder="Confirm Password"
                                        className="w-full py-2 border-b border-b-[#E8ECEF] focus:outline-none placeholder-secondary-grey"
                                    />
                                    {isPasswordVisible ? (
                                    <EyeOff
                                        onClick={() => setIsPasswordVisible(false)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                    />
                                    ) : (
                                    <Eye
                                        onClick={() => setIsPasswordVisible(true)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                    />
                                    )}
                                </div>
                            )}
                            

                            {page === "signup" && (
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="termsAccepted"
                                        checked={formData.termsAccepted}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-green-500 border-gray-300 rounded"
                                    />
                                    <label className="ml-2 text-sm">
                                        I agree with{" "}
                                        <Link href="#" className="text-black font-semibold">
                                        Privacy Policy
                                        </Link>{" "}
                                        and{" "}
                                        <Link href="#" className="text-black font-semibold">
                                        Terms of Use
                                        </Link>
                                    </label>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
                            >
                                {page === "signup" ? "Sign Up" : "Sign In"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default AuthLayout;
