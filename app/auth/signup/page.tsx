"use client";

import { loginSuccess } from "@/app/store/slices/authSlice";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface FormData {
    name: string;
    username: string;
    email: string;
    password: string;
    termsAccepted: boolean;
}

const SignUp = () => {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState<FormData>({
        name: "",
        username: "",
        email: "",
        password: "",
        termsAccepted: false,
    });
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData: FormData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.termsAccepted) {
            alert("You must accept the terms and conditions.");
            return;
        }
        console.log("Form submitted:", formData);
        try {
            const response = await fetch(`https://api.example.com/auth/signup`, {
                method: "POST",
                body: JSON.stringify(formData),
            });
            const result = await response.json();

            dispatch(loginSuccess({ user: result.user, token: result.token }));
            localStorage.setItem('token', result.token);
        } catch (error) {
            console.log('Login failed');
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        
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
                        <h1 className="text-4xl lg:text-4xl text-black-100 font-semibold font-Poppins mb-4">Sign up</h1>
                        <p className="text-secondary-grey mb-6">
                            Already have an account?{' '}
                            <Link href="/auth/login" className="text-primary-green hover:underline">
                                Sign in
                            </Link>
                        </p>
                        <form className="space-y-6 text-secondary-grey" onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="w-full py-2 border-b border-b-[#E8ECEF] focus:outline-none  placeholder-secondary-grey"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="Username"
                                    className="w-full py-2 border-b border-b-[#E8ECEF] focus:outline-none  placeholder-secondary-grey"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email address"
                                    className="w-full py-2 border-b border-b-[#E8ECEF] focus:outline-none  placeholder-secondary-grey"
                                />
                            </div>
                            <div className="relative h-fit">
                                <input
                                    type={isPasswordVisible? "text": "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    className="w-full py-2 border-b border-b-[#E8ECEF] focus:outline-none  placeholder-secondary-grey"
                                />
                                {
                                    isPasswordVisible ?
                                        <EyeOff
                                            onClick={() => setIsPasswordVisible(false)}
                                            className="absolute transform top-1/2 -translate-y-1/2 right-3 cursor-pointer"
                                            color="#6C7275"
                                        /> :
                                    
                                        <Eye
                                            onClick={() => setIsPasswordVisible(true)}
                                            className="absolute transform top-1/2 -translate-y-1/2 right-3 cursor-pointer"
                                            color="#6C7275"
                                        />
                                }
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="termsAccepted"
                                    checked={formData.termsAccepted}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-green-500 border-gray-300 rounded focus:ring-green-400"
                                />
                                <label htmlFor="terms" className="ml-2 text-gray-600 text-sm xphones:text-base">
                                    I agree with{' '}
                                    <Link href="#" className="font-semibold text-black hover:underline">
                                        Privacy Policy
                                    </Link>{' '}
                                    and{' '}
                                    <Link href="#" className="font-semibold text-black hover:underline">
                                        Terms of Use
                                    </Link>
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-2.5 md:py-3 rounded-lg hover:bg-gray-900 transition"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
