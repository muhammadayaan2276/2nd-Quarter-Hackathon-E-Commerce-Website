'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

// Define the Product interface
interface Product {
  _id: string;
  name: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
  category: string;
  price: number;
  description: string;
  stockLevel: number;
  imagePath: string;
  discountPercentage: number;
  isFeaturedProduct: number;
}

// Fetch products from Sanity
async function fetchProducts(): Promise<Product[]> {
  const query = `*[_type == "product"]{
    category,
    _id,
    price,
    description,
    stockLevel,
    imagePath,
    discountPercentage,
    isFeaturedProduct,
    name,
    image {
      asset->{
        _id,
        url
      }
    }
  }`;

  const products = await client.fetch(query);
  return products;
}

// Define the RelatedProducts component
const RelatedProducts: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center ">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product) => (
          <Link href={`/shop/${product._id}`} key={product._id}>
            <div className="p-4 cursor-pointer hover:shadow-lg transition-shadow border rounded-lg">
              <div className="relative w-full h-[250px] sm:h-[300px] overflow-hidden bg-gray-200 rounded-t-lg">
                {product.image?.asset?.url ? (
                  <Image
                    src={product.image.asset.url}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-sm text-gray-500">
                    No image available
                  </div>
                )}
              </div>
              <h2 className="text-lg sm:text-xl font-medium text-center mt-2">{product.name}</h2>
              <p className="text-center text-lg sm:text-xl font-bold">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* "View More" Button Navigating to /shop */}
      <div className="text-center mt-4">
        <Link href="/shop">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

// Define the ProductPage component
const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      const data = await fetchProducts();
      setProducts(data);
    }
    getProducts();
  }, []);

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <RelatedProducts products={products} />
      </div>
    </div>
  );
};

export default ProductPage;
