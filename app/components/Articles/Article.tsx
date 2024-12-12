import Image from "next/image";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

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
                <PrimaryBtn name="Read More" arrowColor="#6C7275" />
            </div>
        </div>
    )
}