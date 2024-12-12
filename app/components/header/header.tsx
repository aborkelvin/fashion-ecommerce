"use client";

import { RootState } from "@/app/store/store";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {       
        setIsMobileMenuOpen((prevState) => !prevState);
    };
    const navLinks = [
        {
            href: "/",
            label: "Home",
        },
        {
            href: "/",
            label: "Shop",
        },
        {
            href: "/",
            label: "Product",
        },
        {
            href: "/",
            label: "Contact Us",
        },
    ];

    const cartCount = useSelector((state:RootState) => state.cart.count);

    return (
        <header className="bg-white flex justify-between items-center py-4 px-4 phones:px-8 md:px-16 xl:px-[160px] relative">
            {/* Logo and Menu Icon */}
            <div className="hidden lg:block">
                <Link href="/" className="text-2xl font-medium font-Poppins">idowucouture</Link>
            </div>                            
            <div className={"flex items-center gap-2 lg:hidden"}>
                <Menu
                    size={24}
                    className="cursor-pointer"
                    role="button"
                    tabIndex={2}
                    /* aria-label="Menu" */
                    onClick={toggleMobileMenu}
                />
                <Link href="/" className="font-medium font-Poppins relative top-[1px]">3legant.</Link>
            </div>

            {/* Desktop Navigation */}
            <nav>
                <ul className="hidden lg:flex flex-col lg:flex-row lg:space-x-6">                    
                    {navLinks.map((navLink, index) => (
                        <NavigationLink href={navLink.href} className={index == 1 || index == 2 ? "flex items-center gap-0.5":""} key={index} >                            
                            {navLink.label}                            
                            {(index == 1 || index == 2) && <ChevronDown size={16} />}
                            
                        </NavigationLink>
                    ))}
                </ul>
            </nav>

            {/* Mobile Navigation Menu */}
            { isMobileMenuOpen && <nav className={`${isMobileMenuOpen? "" : "-top-[500%]"} absolute top-full left-0 w-full bg-white shadow-md lg:hidden z-20 transition-all duration-1000`}>
                <ul className="flex flex-col space-y-4 py-4 px-4 phones:px-8 md:px-16">
                    {navLinks.map((navLink, index) => (
                        <NavigationLink href={navLink.href} className={index == 1 || index == 2 ? "flex items-center gap-0.5":"text-base"} key={index} >                            
                            {navLink.label}                            
                            {(index == 1 || index == 2) && <ChevronDown size={16} />}
                        </NavigationLink>
                    ))}
                </ul>
            </nav> }

            {/* Icons */}            
            <div className="flex items-center gap-[18px]">
                <Image
                    src="/images/search.svg"
                    width={24}
                    height={24}
                    alt="Search"
                    className="cursor-pointer hidden lg:block"
                />
                <Image
                    src="/images/user-circle.svg"
                    width={24}
                    height={24}
                    alt="User profile"
                    className="cursor-pointer hidden lg:block"
                />
                <div className="flex items-center gap-1.5">
                    <Image
                        src="/images/shopping-bag.svg"
                        width={24}
                        height={24}
                        alt="Shopping bag"
                        className="cursor-pointer"
                    />
                    <div className="w-6 h-6 bg-black-100 rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                        {cartCount}
                    </div>
                </div>
            </div>
        </header>
    );
}


// NavigationLink Component
export const NavigationLink = ({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) => {
    return (
        <Link href={href} className={` ${className} font-medium text-black-100`}>
            {children}
        </Link>
    );
}