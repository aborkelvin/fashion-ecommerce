import { ArrowRight } from 'lucide-react';
import React from 'react';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';

interface CardProps {
    index: number;
    image: string;
    title: string;    
}


const ShopCollectionCard: React.FC<CardProps> = ({index, image, title, }) => {

    return (
        <div className={` ${index == 0 ? ' row-span-2' : ''} flex flex-col relative items-center bg-primary-grey text-black-100 min-h-5`}>      
            <img src={image} alt={title} className="w-full h-auto object-cover" />
            <div className="absolute bottom-3.5 lg:bottom-10 left-3.5 lg:left-8">
                <h3 className="text-[28px] lg:text-[34px] font-bold">{title}</h3>
                <PrimaryBtn name='Collection' />
            </div>
        </div>
  );
};

export default ShopCollectionCard;
