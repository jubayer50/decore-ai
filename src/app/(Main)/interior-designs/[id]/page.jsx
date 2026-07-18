import Image from "next/image";
import { Button } from "@heroui/react";
import {
  FaRulerCombined,
  FaPhoneAlt,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";
import { HiOutlineCurrencyDollar, HiOutlineColorSwatch } from "react-icons/hi";
import { MdCategory } from "react-icons/md";
import { getInteriorByDesignId } from "@/lib/api/getInteriorDesign";

const InteriorCardDetailPage = async ({ params }) => {
  const { id } = await params;

  const interior = await getInteriorByDesignId(id);

  const {
    interior_title,
    short_description,
    full_details,
    budget,
    category,
    style,
    image,
    createAt,
    ["space size"]: spaceSize,
    ["color palette"]: colorPalette,
  } = interior;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
      <div className="grid gap-10 lg:grid-cols-3">
        {/* Left Content */}
        <div className="space-y-8 lg:col-span-2">
          {/* Image */}
          <div className="overflow-hidden rounded-md border shadow">
            <Image
              src={image}
              alt={interior_title}
              width={1200}
              height={700}
              className="h-125 w-full object-cover"
            />
          </div>

          {/* Category */}
          <span className="inline-block rounded-full bg-[#b2967d20] px-4 py-2 text-sm font-semibold capitalize text-[#927b66]">
            {category}
          </span>

          {/* Title */}
          <h1 className="text-4xl font-bold text-[#927b66]">
            {interior_title}
          </h1>

          {/* Short Description */}
          <p className="playfair text-xl leading-8 text-default-600">
            {short_description}
          </p>

          {/* Information */}
          <div className="grid gap-5 rounded-md border bg-white p-6 md:grid-cols-2">
            <div className="flex items-center gap-3 rounded-md border p-4">
              <MdCategory className="text-2xl text-[#b2967d]" />
              <div>
                <p className="text-sm text-default-500">Design Style</p>
                <h3 className="font-semibold playfair text-xl">{style}</h3>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-md border p-4">
              <FaRulerCombined className="text-xl text-[#b2967d]" />
              <div>
                <p className="text-sm text-default-500">Space Size</p>
                <h3 className="font-semibold playfair text-xl">
                  {spaceSize} sq ft
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-md border p-4">
              <HiOutlineCurrencyDollar className="text-2xl text-[#b2967d]" />
              <div>
                <p className="text-sm text-default-500">Estimated Budget</p>
                <h3 className="font-semibold playfair text-xl">${budget}</h3>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-md border p-4">
              <HiOutlineColorSwatch className="text-2xl text-[#b2967d]" />
              <div>
                <p className="text-sm text-default-500">Color Palette</p>
                <h3 className="font-semibold playfair text-xl">
                  {colorPalette}
                </h3>
              </div>
            </div>
          </div>

          {/* Design Overview */}
          <div className="rounded-md border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-[#927b66]">
              Design Overview
            </h2>

            <p className="leading-8 playfair text-[19px] text-default-600">
              {full_details}
            </p>
          </div>

          {/* Contact Designer */}
          <div className="rounded-md border bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-[#927b66]">
              Contact Designer
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-[#b2967d20] p-3">
                  <FaPhoneAlt className="text-[#b2967d]" />
                </div>

                <div>
                  <p className="text-sm text-default-500">Phone</p>
                  <p className="font-medium">+880 1712-345678</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full bg-[#b2967d20] p-3">
                  <FaEnvelope className="text-[#b2967d]" />
                </div>

                <div>
                  <p className="text-sm text-default-500">Email</p>
                  <p className="font-medium">designer@decoraai.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full bg-[#b2967d20] p-3">
                  <FaCalendarAlt className="text-[#b2967d]" />
                </div>

                <div>
                  <p className="text-sm text-default-500">Availability</p>
                  <p className="font-medium">Mon - Sat (9AM - 6PM)</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button className="rounded-md bg-[#b2967d] px-8 font-semibold text-white hover:bg-[#927b66]">
                Contact Now
              </Button>

              <Button
                variant="bordered"
                className="rounded-md border-[#b2967d] px-8 font-semibold text-[#b2967d]"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div>
          <div className="rounded-md border bg-white p-6 shadow">
            <h2 className="mb-5 text-2xl font-bold text-[#927b66]">
              Project Summary
            </h2>

            <div className="space-y-5">
              <div className="flex justify-between border-b pb-3">
                <span className="text-default-500">Category</span>
                <span className="font-semibold capitalize">{category}</span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="text-default-500">Style</span>
                <span className="font-semibold">{style}</span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="text-default-500">Space Size</span>
                <span className="font-semibold">{spaceSize} sq ft</span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="text-default-500">Budget</span>
                <span className="font-semibold">${budget}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-default-500">Published</span>
                <span className="font-semibold">
                  {new Date(createAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>

            <Button className="mt-8 w-full rounded-md bg-[#b2967d] font-semibold text-white hover:bg-[#927b66]">
              Save Design
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorCardDetailPage;
