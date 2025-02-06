'use client'
import { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Service from "@/components/Service";
import Card from "@/components/Card";
import { CardData } from "@/utils/types";
import Pagination from "@/components/Pagination";
import Image from "next/image";
import Link from "next/link";
import SearchAndFilter from "@/components/SearchAndFilter"; // Import SearchAndFilter component

export default function Shop() {
  const [data, setData] = useState<CardData[]>([]);
  const [filteredData, setFilteredData] = useState<CardData[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // Add search term state

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/product");
      const products: CardData[] = await response.json();
      setData(products);
      setFilteredData(products); // Initially show all products
    };
    fetchProducts();
  }, []);
  const handlePriceChange = (minPrice: number, maxPrice: number) => {
    const filtered = data.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setFilteredData(filtered);
  };

  // Handle Category Filter
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    filterProducts(category, itemsPerPage, sortBy, searchTerm, 1);
  };

  // Handle Sort Filter
  const handleSortChange = (sortBy: string) => {
    setSortBy(sortBy);
    setCurrentPage(1);
    filterProducts(selectedCategory, itemsPerPage, sortBy, searchTerm, 1);
  };

  // Handle Search Input Change
  const handleSearchChange = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    setCurrentPage(1);
    filterProducts(selectedCategory, itemsPerPage, sortBy, searchTerm, 1);
  };

  // Handle Page Change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    filterProducts(selectedCategory, itemsPerPage, sortBy, searchTerm, page);
  };

  const filterProducts = (
    category: string,
    itemsPerPage: number,
    sortBy: string,
    searchTerm: string,
    page: number
  ) => {
    let filtered = [...data];

    // Filter by category
    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort the data
    if (sortBy === "price-low-to-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high-to-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    // Pagination Logic
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    filtered = filtered.slice(startIndex, endIndex);

    setFilteredData(filtered);
  };

  return (
    <div>
      <div className="relative w-full h-[300px] md:h-[390px] overflow-hidden">
        <Image src="/Rectangle 1.png" alt="shop background" layout="fill" objectFit="cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <Image src="/Meubel House_Logos-05.png" alt="logo" height={46} width={140} className="mx-auto -mb-4" />
          <h1 className="text-4xl md:text-6xl text-[#000000] font-medium mb-5">Shop</h1>
          <div className="flex justify-center items-center text-lg pb-16">
            <Link href="/">
              <h3 className="font-medium text-[14px] md:text-[16px] font-poppins text-[#000000]">Home</h3>
            </Link>
            <MdKeyboardArrowRight className="mx-2 w-[16px] md:w-[20px] h-[16px] md:h-[20px] text-[#000000]" />
            <h3 className="font-poppins text-[14px] md:text-[16px] font-[300] text-[#000000]">Shop</h3>
          </div>
        </div>
      </div>

      {/* Add SearchAndFilter component */}
      <div className="bg-gray-300 p-1 rounded-lg shadow-md">
  <div className="bg-amber-50 p-1 rounded-lg">
      <SearchAndFilter
        onCategoryChange={handleCategoryChange}
        onSortChange={handleSortChange}
        onSearchChange={handleSearchChange}
        onPriceChange={handlePriceChange}
      />
      </div>
      </div>

      <div className="flex w-full justify-center items-center px-4 sm:px-6 md:px-12">
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {filteredData.map((cardData) => (
            <Card key={cardData._id} {...cardData} />
          ))}
        </div>
      </div>

      {/* Pagination Component */}
      <Pagination 
        currentPage={currentPage} 
        totalPages={Math.ceil(data.length / itemsPerPage)} 
        onPageChange={handlePageChange} 
      />

      <br />
      <br />
      <Service />
    </div>
  );
}
