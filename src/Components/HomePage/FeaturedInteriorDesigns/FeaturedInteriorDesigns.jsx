import Link from "next/link";
import { Button } from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { getInteriorDesigns } from "@/lib/api/getInteriorDesign";
import InteriorCard from "@/Components/InteriorDesigns/InteriorCard/InteriorCard";

const FeaturedInteriorDesigns = async () => {
  const { interiorDesigns: featuredDesigns } = await getInteriorDesigns();
  console.log(featuredDesigns);

  return (
    <section className="max-w-330 mx-auto px-3 my-16 md:my-24">
      <div className="">
        {/* Left Content */}
        <div className="text-center">
          <span className="rounded-full bg-[#b2967d20] px-4 py-2 text-sm font-medium text-[#927b66]">
            Featured Collection
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#927b66] leading-tight">
            Explore Our Featured Interior Designs
          </h2>

          <p className="mt-5 max-w-5xl playfair mx-auto text-xl text-default-500">
            Discover a handpicked collection of elegant interiors crafted to
            inspire your next renovation. From modern living rooms to luxurious
            office spaces, every design blends creativity with functionality.
          </p>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {featuredDesigns.slice(0, 3).map((interior) => (
            <InteriorCard key={interior._id} interior={interior}></InteriorCard>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/interior-designs">
            <Button className="mt-8 rounded-md bg-[#b2967d] px-7 font-semibold text-white">
              Explore All Designs
              <FaArrowRightLong />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInteriorDesigns;
