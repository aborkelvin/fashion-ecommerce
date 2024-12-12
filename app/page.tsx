"use client";

import { useEffect, useState } from "react";
import ProductCard, { ProductCardProps } from "./components/ProductCard/ProductCard";
import CategoryCard from "./components/CategoryCard/CategoryCard";
import CountdownSection from "./components/CountDownSection/CountDownSection";
import ShopCollectionCard from "./components/ShopCollectionCard/ShopCollectionCard";
import PrimaryBtn from "./components/PrimaryBtn/PrimaryBtn";
import ArticleCard from "./components/Articles/Article";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {

    const [products, setProducts] = useState<ProductCardProps[]>([])
    const categories = [
        {
            image: "/images/golf-club.png",
            label: "Golf Clubs",
        },
        {
            image: "/images/soap.png",
            label: "Golf Balls",
        },
        {
            image: "/images/glove.png",
            label: "Gold Bags",
        },
        {
            image: "/images/shirt.png",
            label: "Clothing & Rainwear",
        },
        {
            image: "/images/shoe.png",
            label: "Footwear",
        },
        {
            image: "/images/glover.png",
            label: "Accessories",
        }
    ];

    const collections = [
        {
            image: '/images/collection1.png',
            title: 'Juniors Set',            
        },
        {
            image: '/images/collection2.png',
            title: 'Men’s Set',            
        },
        {
            image: '/images/collection3.png',
            title: 'Women’s Set',            
        },
    ];

    const articles = [
        {
            image: '/images/air-jordan.png',
            title: 'Air Jordan x Travis Scott Event', 
        },
        {
            image: '/images/adidas.png',
            title: 'The timeless classics on the green', 
        },
        {
            image: '/images/trophy.png',
            title: 'The 2023 Ryder Cup', 
        },        
    ]

    const gamesImages = [
        '/images/games/social1.png',
        '/images/games/social2.png',
        '/images/games/social3.png',
        '/images/games/social4.png',
        '/images/games/social5.png',
        '/images/games/social6.png',
    ]


    // Fetch products from FakeStore API to demonstrate api consumption
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products?limit=10");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);
    
    return (
        <main>
            {/* Hero Section */}
            <div className="hero relative flex items-end lg:items-center justify-center h-screen py-10 px-8 md:px-16 xl:px-[160px]">
                <picture>
                    <source srcSet="/images/hero.png" media="(min-width: 1024px)" />
                    <source srcSet="/images/hero-mobile.png" media="(max-width: 1023px)" />
                    <img
                        src="/images/hero.png"
                        alt="Golf clubs"
                        className="absolute inset-0 w-full h-full object-cover z-10"
                    />
                </picture>

                {/* <!-- Gradient Overlay --> */}
                <div className="absolute inset-0 bg-gradient-to-r from-black to-[#0D0D0D] opacity-50"></div>

                <div className="relative z-10 text-white text-center md:text-left w-full md:max-w-[500px] mr-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium leading-tight font-Poppins bg-text-gradient bg-clip-text text-transparent">
                        More than <br /> just a game.<br />It’s a lifestyle.
                    </h1>
                    <p className="mt-4 text-base md:text-lg lg:text-xl text-white md:max-w-[90%]">
                        Whether you're just starting out, have played your whole life, or you're a Tour pro, your swing is like a fingerprint.
                    </p>
                    <button
                        className="mt-4 lg:mt-6 bg-primary-green text-black font-medium text-sm lg:text-lg px-14 py-3 rounded-lg shadow-md hover:bg-green-600 transition">
                        Shopping Now
                    </button>
                </div>
            </div>
                        
            <div className="space-y-16 py-10 px-8 md:px-16 xl:px-[160px] lg:mb-10">
                {/* Featured Products Section */}
                <section>
                    <h2 className="text-[34px] lg:text-[40px] font-Poppins font-medium mb-5 lg:mb-9">Featured</h2>
                    {/* <div className="grid gap-5 md:gap-6 lg:gap-10 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]"> */}
                    <div className="flex gap-5 md:gap-6 lg:gap-10 overflow-scroll" >
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                rating={{rate:Math.floor(product.rating?.rate || 0), count:product.rating.count}} // FakeStore API includes rating
                            />
                        ))}
                    </div>
                </section>

                {/* Shop by Categories Section */}
                <section>
                    <h2 className="text-[34px] lg:text-[40px] font-Poppins font-medium mb-5 lg:mb-9 text-[#23262F] text-center">Shop by Categories</h2>
                    <div className="grid gap-y-6 lg:gap-y-12 gap-2 lg:gap-6 grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
                        {categories.map((category, index) => (
                            <CategoryCard
                                key={index}
                                image={category.image}
                                label={category.label}
                            />
                        ))}
                    </div>
                </section>
            </div>

            {/* CountDown Section */}
            <CountdownSection />

            
            {/* Shop Collection */}
            <div className=" py-10 px-8 md:px-16 xl:px-[160px]">
                <h2 className="text-[34px] lg:text-[40px] font-Poppins font-medium mb-5 lg:mb-9 text-center lg:text-left">Shop Collection</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6">
                    {collections.map((collection, index) => (
                        <ShopCollectionCard
                            key={index}
                            index={index}
                            image={collection.image}
                            title={collection.title}                            
                        />
                    ))}
                </div>                                            
            </div>

            {/* Articles Section */}
            <div className=" py-10 px-8 md:px-16 xl:px-[160px]">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-[30px] lg:text-[40px] font-Poppins font-medium">Latest Articles</h2>
                    <PrimaryBtn name="View More" />
                </div>
                <div className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
                    {articles.map((article, index) => (
                        <ArticleCard
                            key={index}
                            image={article.image}
                            title={article.title}
                        />
                    ))}
                </div>
            </div>

            {/* Newsletter Section */}
            <div
                className="bg-black-100 lg:bg-[url('/images/hero-2-bg.png')] bg-no-repeat bg-cover bg-center w-full px-8 py-[95px] 
                flex flex-col justify-center items-center text-center text-[#FEFEFE]"
            >
                <div className="w-full md:max-w-[50%] lg:max-w-[35%]">
                    <h3 className="text-[28px] lg:text-[40px]  font-medium font-Poppins mb-1">Join Our Newsletter</h3>
                    <p className="text-sm lg:text-lg mb-6">
                        Sign up for deals, new products and promotions
                    </p>
                    <div className="relative text-[#FEFEFE] " >
                        <input
                            type="email"
                            name=""
                            id=""                            
                            className="border-b border-b-[#FEFEFE] bg-transparent w-full py-2 px-6 lg:py-3 lg:px-6 focus:outline-none group"
                        />
                        <div className="flex gap-3 absolute top-1/2 left-0 transform -translate-y-1/2 group-focus:hidden " >
                            <Mail size={24} color="#FEFEFE" className="" />
                            <span className="relative lg:top-0.5">Email address</span>
                        </div>             
                        <button className="font-medium absolute top-1/2 right-0 transform -translate-y-1/2">
                            Signup
                        </button>
                    </div>
                </div>
            </div>

            {/* Social Media Section */}
            <div className="py-10 px-8 flex flex-col gap-2 lg:gap-3 text-center">
                <h4 className="font-bold text-[#6C7275]" >NEWSFEED</h4>
                <h5 className="text-[34px] lg:text-[40px] font-Poppins text-black-200 font-medium" >Instagram</h5>
                <p className="text-sm lg:text-xl text-black-100">Follow us on social media for more discount & promotions</p>
                <span className="text-xl text-[#6C7275] font-medium font-Poppins" >@3legant_official</span>
            </div>
            {/* <div className="flex gap-3 overflow-scroll"> */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-0">
            {/* <div className="flex flex-wrap"> */}
                {/* {gamesImages.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        width={188}
                        height={188}
                        alt="Social media"
                        className="object-cover"
                    />
                ))} */}
            </div>

        </main>
    )
}