import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const categories = [
  {
    name: "Living Room",
    slug: "living room",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900",
  },
  {
    name: "Home Office",
    slug: "home office",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
  },

  {
    name: "Studio Apartment",
    slug: "studio apartment",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900",
  },
  {
    name: "Office Interior",
    slug: "office interior",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900",
  },
  {
    name: "Restaurant Interior",
    slug: "restaurant interior",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900",
  },

  {
    name: "Industrial Design",
    slug: "industrial design",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900",
  },
];

const BrowseByCategory = () => {
  return (
    <section className="max-w-330 mx-auto px-3 my-16 md:my-24">
      {/* Heading */}
      <div className="text-center">
        <span className="rounded-full bg-[#b2967d20] px-4 py-2 text-sm font-medium text-[#927b66]">
          Browse Collection
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#927b66]">
          Browse by popular Category
        </h2>

        <p className="max-w-3xl mx-auto mt-4 playfair text-xl text-default-500">
          Discover interior design inspiration across different spaces. Choose a
          category to explore layouts, styles, and ideas tailored to your needs.
        </p>
      </div>

      {/* Category Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/interior-designs?category=${encodeURIComponent(
              category.slug,
            )}`}
            className="group"
          >
            <div className="relative overflow-hidden rounded-xl h-72 shadow-md">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {category.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-200">
                      Explore beautiful designs
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#927b66] transition-all duration-300 group-hover:bg-[#b2967d] group-hover:text-white">
                    <FaArrowRightLong />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BrowseByCategory;
