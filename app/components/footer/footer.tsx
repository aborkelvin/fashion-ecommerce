import { ChevronUp, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";


export default function Footer() {
    const paymentImages = [
        {
            image: '/images/footer/visa.svg',
            alt: 'Visa'
        },
        {
            image: '/images/footer/american-express.svg',
            alt: 'American Express'
        },
        {
            image: '/images/footer/mastercard.svg',
            alt: 'Mastercard'
        },
        {         
            image: '/images/footer/stripe.svg',
            alt: 'Stripe'
        },
        {
            image: '/images/footer/paypal.svg',
            alt: 'Paypal'
        },
        
        {
            image: '/images/footer/apple-pay.svg',
            alt: 'Apple pay'
        },
    ]

    return (
        <div className="bg-black-100 lg:bg-black px-4 phones:px-8 py-14 lg:py-20 lg:px-[160px] flex flex-col gap-16">
            
            <section className="flex flex-col gap-8 md:gap-0 md:flex-row" >
                <div className="flex-1 pb-8 flex flex-col text-[#FEFEFE] gap-8 border-b border-b-[#6C7275] md:border-none" >
                    <Link href="/" className="font-medium font-Poppins relative top-[1px] text-2xl">3legant.</Link>
                    <p className="md:text-xl md:font-medium" >
                        More than just a game. <br className="hidden lg:block" /> It’s a lifestyle.
                    </p>
                    <div className="flex gap-6">
                        <Instagram size={24} />
                        <Facebook size={24} />
                        <Youtube size={24} />
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-8 md:flex-row md:justify-between" >
                    <div className="flex flex-col gap-6 md:gap-10 text-[#FEFEFE] border-b border-b-[#6C7275] md:border-none pb-8">
                        <div className="flex justify-between items-center">                            
                            <h6 className="font-medium" >Page</h6>
                            <ChevronUp size={16} className="md:hidden" />
                        </div>
                        <div className="flex flex-col gap-6 text-white text-sm font-medium">
                            <Link href="/" className="" >Home</Link>
                            <Link href="/" className="" >Shop</Link>
                            <Link href="/" className="" >Product</Link>
                            <Link href="/" className="" >Articles</Link>
                            <Link href="/" className="" >Contact Us</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 md:gap-10 text-[#FEFEFE] border-b border-b-[#6C7275] md:border-none pb-8">
                        <div className="flex justify-between items-center">                            
                            <h6 className="font-medium" >Info</h6>
                            <ChevronUp size={16} className="md:hidden" />
                        </div>
                        <div className="flex flex-col gap-6 text-white text-sm font-medium">
                            <Link href="/" className="" >Shipping Policy</Link>
                            <Link href="/" className="" >Return & Refund</Link>
                            <Link href="/" className="" >Support</Link>
                            <Link href="/" className="" >FAQs</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 md:gap-10 text-[#FEFEFE] pb-8">
                        <h6 className="font-medium" >Office</h6>
                        <div className="flex flex-col gap-6 text-white text-sm">
                            <span>43111 Hai Trieu street,</span>
                            <span>District 1, HCMC</span>
                            <span>Vietnam</span>
                            <span>84-756-3237</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-6 lg:py-8 flex flex-col gap-8 items-center justify-center xl:flex-row-reverse xl:justify-between border-t border-t-[#6C7275]" >
                <div className="flex gap-1 md:gap-2 justify-center phones:justify-between sm:justify-center w-full md:w-fit flex-wrap phones:flex-nowrap">
                    {
                        paymentImages.map((paymentImage, index) => (
                            <img 
                                key={index}
                                src={paymentImage.image}
                                alt={paymentImage.alt}
                            />
                        ))
                    }
                </div>
                <div className="flex flex-col gap-7 md:flex-row-reverse items-center">
                    <div className="flex gap-2 md:gap-3 text-white md:text-[#6C7275]" >
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <span className="hidden md:block text-[#6C7275]" >|</span>
                    <p className="text-[#E8ECEF] text-xs font-medium text-center" >
                        Copyright © 2023 3legant. All rights reserved
                    </p>
                </div>
            </section>

        </div>
    )
}