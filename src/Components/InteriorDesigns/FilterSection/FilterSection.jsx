"use client";

import { ListBox, SearchField, Select } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const FilterSection = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceSort, setPriceSort] = useState("");

  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) {
      params.set("search", search);
    }
    if (category) {
      params.set("category", category);
    }
    if (priceSort) {
      params.set("budget", priceSort);
    }

    router.push(`/interior-designs?${params.toString()}`);
  }, [search, category, priceSort, router]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5">
      {/* search */}
      <SearchField name="search" value={search} onChange={setSearch}>
        <SearchField.Group className="rounded-md border border-gray-300 shadow-none">
          <SearchField.SearchIcon />
          <SearchField.Input placeholder="Search interior design..." />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>

      {/* category filter */}
      <Select
        name="category"
        className="w-full"
        placeholder="Select interior category"
        value={category}
        onChange={(value) => setCategory(String(value))}
      >
        <Select.Trigger className="rounded-md border border-gray-300 shadow-none">
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>

        <Select.Popover>
          <ListBox>
            <ListBox.Item id="" textValue="Default">
              Filter by category
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item id="living room" textValue="Living Room">
              Living Room
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item id="home office" textValue="Home Office">
              Home Office
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item id="garden & patio" textValue="Garden & Patio">
              Garden & Patio
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item id="studio apartment" textValue="Studio Apartment">
              Studio Apartment
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item id="office interior" textValue="Office Interior">
              Office Interior
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item
              id="restaurant interior"
              textValue="Restaurant Interior"
            >
              Restaurant Interior
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item id="hotel room" textValue="Hotel Room">
              Hotel Room
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item id="industrial design" textValue="Industrial Design">
              Industrial Design
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item id="farmhouse design" textValue="Farmhouse Design">
              Farmhouse Design
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>

      {/* badget sort */}
      {/* Price Sort */}
      <Select
        name="priceSort"
        className="w-full"
        placeholder="Sort By budget"
        value={priceSort}
        onChange={(value) => setPriceSort(String(value))}
      >
        <Select.Trigger className="rounded-md border border-gray-300 shadow-none">
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>

        <Select.Popover className="rounded-md border border-gray-300 shadow-none">
          <ListBox>
            <ListBox.Item id="" textValue="Default">
              Sort by budget
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item id="low-high" textValue="Low to High">
              Low to High
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item id="high-low" textValue="High to Low">
              High to Low
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  );
};

export default FilterSection;
