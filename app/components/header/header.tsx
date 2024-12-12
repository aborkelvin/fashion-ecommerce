import { ChevronDown, Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    
    return (
        <header className="bg-white flex justify-between items-center py-4 px-4 phones:px-8 md:px-16 xl:px-[160px]">
            <div className="hidden lg:block">
                <Link href="/" className="text-2xl font-medium font-Poppins">idowucouture</Link>
            </div>
            <div className="flex items-center gap-2 lg:hidden" >
                <Menu size={24} className="cursor-pointer" role="button" tabIndex={2} />
                <Link href="/" className="font-medium font-Poppins relative top-[1px]">3legant.</Link>
            </div>
            <nav>
                <ul className="hidden lg:flex flex-col lg:flex-row lg:space-x-4">
                    <Link href="/" className="text-sm font-medium text-black-100">
                        Home
                    </Link>
                    <Link href="/" className="text-sm font-medium text-black-100 flex items-center gap-0.5">
                        Shop
                        <ChevronDown size={16} />
                    </Link>
                    <Link href="/" className="text-sm font-medium text-black-100 flex items-center gap-0.5">
                        Product
                        <ChevronDown size={16} />
                    </Link>
                    <Link href="/" className="text-sm font-medium text-black-100">
                        Contact Us
                    </Link>
                </ul>
            </nav>
            <div className="flex items-center gap-[18px]" >
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
                <div className="flex items-center gap-1.5" >
                    <Image 
                        src="/images/shopping-bag.svg"
                        width={24}
                        height={24}
                        alt="Shopping bag"
                        className="cursor-pointer"
                    />
                    <div className="w-6 h-6 bg-black-100 rounded-full flex items-center justify-center text-white text-[10px] font-bold" >
                        2
                    </div>
                </div>
            </div>
        </header>
    )
}