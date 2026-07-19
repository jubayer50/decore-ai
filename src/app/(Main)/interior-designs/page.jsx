import FilterSection from "@/Components/InteriorDesigns/FilterSection/FilterSection";
import InteriorCard from "@/Components/InteriorDesigns/InteriorCard/InteriorCard";
import PaginationDesign from "@/Components/InteriorDesigns/Pagination/Pagination";
import { getInteriorDesigns } from "@/lib/api/getInteriorDesign";

const InteriorDesignPage = async ({ searchParams }) => {
  const searchParam = await searchParams;

  const filtersQuery = new URLSearchParams(searchParam);
  const filters = filtersQuery.toString();

  const { interiorDesigns, totalDesigns } = await getInteriorDesigns(filters);

  return (
    <div className="max-w-330 mx-auto my-10 px-3">
      <div>
        <h2 className="text-2xl font-bold">Explore Interior Designs</h2>
        <p className="playfair text-xl mt-0.5">
          Browse professionally crafted interior design ideas by category,
          style, budget, and space.
        </p>
      </div>

      <div className="px-3 py-2 rounded-md bg-[#b2967d60] my-8">
        <FilterSection></FilterSection>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {interiorDesigns.map((interior) => (
          <InteriorCard key={interior._id} interior={interior}></InteriorCard>
        ))}
      </div>

      <div className="mt-5">
        <PaginationDesign totalDesigns={totalDesigns}></PaginationDesign>
      </div>
    </div>
  );
};

export default InteriorDesignPage;
