import { ArrowRight } from "lucide-react";


interface PrimaryBtnProps {
    name: string;
}

export default function PrimaryBtn({name}: PrimaryBtnProps) {

    return (
        <button className="w-fit text-black-200 font-medium py-1 text-sm lg:text-base flex gap-1 items-center border-b border-b-black-200" >
            <span>{name}</span>
            <ArrowRight size={16} />
        </button>
    )
}