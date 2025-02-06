import React, { useState } from "react";

interface SearchAndFilterProps {
  onCategoryChange: (category: string) => void;
  onSortChange: (sortBy: string) => void;
  onSearchChange: (searchTerm: string) => void;
  onPriceChange: (minPrice: number, maxPrice: number) => void;
}

const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: '$0 to $200', min: 0, max: 200 },
  { label: '$201 to $750', min: 201, max: 750 },
  { label: '$751 to $1100', min: 751, max: 1100 },
  { label: '$1101 and above', min: 1101, max: Infinity },
];

const categories = [
  "All Categories",
  "Sofa",
  "Chair",
  "Bed",
  "Table"
];

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  onCategoryChange,
  onSortChange,
  onSearchChange,
  onPriceChange,
}) => {
  const [selectedPriceRange, setSelectedPriceRange] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Handle category filter change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category); // Set the selected category locally
    onCategoryChange(category); // Trigger the parent callback to filter products by category
  };

  // Handle sort filter change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  // Handle price range selection
  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPriceRange(Number(e.target.value));
  };

  // Apply price filter when button is clicked
  const applyPriceFilter = () => {
    const { min, max } = priceRanges[selectedPriceRange];
    onPriceChange(min, max);
  };

  return (
    <div className="flex flex-wrap justify-between items-center my-4 px-4 sm:px-6 md:px-10">
      {/* Search Input */}
      <div className="w-full sm:w-64 md:w-48 md:mb-2 lg:w-80 mb-2 sm:mb-0">
        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 border rounded-md w-full"
          onChange={handleSearchChange}
        />
      </div>

      {/* Category Filter */}
      <div className="w-full sm:w-48 md:w-56 lg:w-64 md:mb-2 sm:mb-0">
        <select
          onChange={handleCategoryChange}
          value={selectedCategory}
          className="px-4 py-2 border rounded-md w-full"
        >
          {categories.map((category, index) => (
            <option key={index} value={category === "All Categories" ? "" : category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Sort Filter */}
      <div className="w-full sm:w-48 md:w-56 lg:w-64  md:mb-4 pt-2 lg:pb-">
        <select
          onChange={handleSortChange}
          className="px-4 py-2 border rounded-md w-full"
        >
          <option value="default">Sort By</option>
          <option value="price-low-to-high">Price Low to High</option>
          <option value="price-high-to-low">Price High to Low</option>
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="w-full sm:w-48 md:w-56 lg:w-64 flex items-center mt-2 lg:pb-2  sm:mt-0">
        <select
          onChange={handlePriceChange}
          className="px-4 py-2 border rounded-md w-full"
        >
          {priceRanges.map((range, index) => (
            <option key={index} value={index}>
              {range.label}
            </option>
          ))}
        </select>
        <button
          onClick={applyPriceFilter}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default SearchAndFilter;
