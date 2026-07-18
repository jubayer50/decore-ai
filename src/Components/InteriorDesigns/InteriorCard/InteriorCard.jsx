import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FaRulerCombined } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { MdCategory } from "react-icons/md";

const InteriorCard = ({ interior }) => {
  const {
    _id,
    interior_title,
    short_description,
    budget,
    category,
    style,
    image,
    ["space size"]: spaceSize,
  } = interior;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-md border group hover:border-[#b2967d] bg-white shadow transition-all duration-300 hover:shadow-lg">
      {/* Image */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={image}
          alt={interior_title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Category */}
        <span className="bg-[#b2967d70] w-fit mb-2 rounded-full capitalize px-3 py-1 text-xs font-semibold">
          {category}
        </span>

        {/* Title */}
        <h2 className="line-clamp-2 text-xl text-[#927b66] font-bold">
          {interior_title}
        </h2>

        {/* Description */}
        <p className="mt-3 line-clamp-2 playfair  text-default-500">
          {short_description}
        </p>

        {/* Meta */}
        <div className="mt-5 playfair space-y-2 text-default-600">
          <div className="flex items-center gap-2">
            <MdCategory className="text-primary" />
            <span className="truncate">{style}</span>
          </div>

          <div className="flex playfair text-lg items-center gap-2">
            <FaRulerCombined className="text-primary" />
            <span>{spaceSize} sq ft</span>
          </div>

          <div className="flex playfair text-lg items-center gap-2">
            <HiOutlineCurrencyDollar className="text-primary" />
            <span>${budget}</span>
          </div>
        </div>

        {/* Button */}
        <div className="mt-auto pt-6">
          <Link href={`/interior-designs/${_id}`}>
            <Button className="w-full bg-[#b2967d] rounded-md font-semibold">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InteriorCard;
