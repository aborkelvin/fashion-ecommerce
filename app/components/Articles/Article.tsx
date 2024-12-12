import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ArticleCardProps {
    image: string;
    title: string;
}

export default function ArticleCard({ image, title }: ArticleCardProps) {
    
    return (
        <div >
            <Image
                src={image}
                alt={title}
                width={311}
                height={283}
                className="w-full object-cover mb-4 lg:mb-6"
            />
            <div className="flex flex-col gap-0.5 lg:gap-2">
                <h3 className="text-[#23262F] font-semibold lg:text-xl" >
                    {title}
                </h3>
                <button className="w-fit text-black-200 font-medium py-1 text-sm lg:text-base flex gap-1 items-center border-b border-b-black-200" >
                    <span>Read More</span>
                    <ArrowRight size={16} color="#6C7275" />
                </button>
            </div>
        </div>
    )
}