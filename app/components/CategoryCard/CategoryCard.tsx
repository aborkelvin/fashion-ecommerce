export interface CategoryCardProps {
    image: string;
    label: string;
}


const CategoryCard = ({ image, label }:CategoryCardProps) => {
  return (
    <div className="flex flex-col gap-6 items-center hover:shadow-xs cursor-pointer transition duration-300">
      <div className="relative w-full">
        <img
          src={image}
          alt={label}
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-lg lg:text-xl font-Poppins font-medium text-[#23262F] text-center">{label}</p>
    </div>
  );
};

export default CategoryCard;
