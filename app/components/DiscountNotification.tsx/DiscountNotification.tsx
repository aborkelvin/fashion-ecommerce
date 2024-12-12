"use client";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

export default function DiscountNotification() {
    const [show, setShow] = useState(true);
    return (
        <div className={` ${show ? "" : "hidden"} bg-primary-green p-3 lg:p-2 flex items-center justify-center gap-3 relative`}>
            
            {/* Or use ticket percent from lucide-react */}
            <Image
                src="/images/icon.svg"
                alt="Discount icon"
                width={20}
                height={18}     
            />  
            <p className="text-xs lg:text-sm font-semibold relative top-0.5 lg:top-0">30% off storewide — Limited time!</p>
            <button className="hidden lg:flex lg:gap-1 py-0.5 border-b border-b-black" >
                <span className="font-medium text-sm" >Shop Now</span>
                <ArrowRight size={16} />
            </button>
            <X
                className="absolute right-8 lg:right-5 w-4 lg:w-5 cursor-pointer"
                color="#121212"
                role="button"
                tabIndex={1}
                onClick={() => setShow(false)}
            />
        </div>
    );
}