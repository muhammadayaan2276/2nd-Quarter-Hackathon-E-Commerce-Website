
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import Service from "@/components/Service";
import { getProductById } from "@/sanity/queries/FetchProduct";
import { getFeaturedProduct } from "@/sanity/queries/FetchProduct";
import AddTocartDynamicPage from "@/components/AddToCartDynamicPage";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import ReviewsAndRatings from "@/components/ReviewsAndRatings";
import FAQAndHelpCenter from "@/components/FAQAndHelpCenter";
import Detail from "@/components/Details";
import ProductPage from "@/components/ProductPage";








export default async function ProductDetail({
  params,
}: {
  params: { productid: string };
}) {
  // const data = secData.find((item: SecData) => item.id === params.productid);

  const product = await getProductById(params.productid);
  const featuredData = (await getFeaturedProduct()) || [];

  console.log(product);
  return (
    <div>
      <div className="relative w-full h-[300px] md:h-[390px] overflow-hidden">
                 {/* Background Image */}
                 <Image src="/Rectangle 1.png" alt="shop background" layout="fill" objectFit="cover" />
         
                 {/* Centered Content */}
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                   {/* Logo */}
                   <Image src="/Meubel House_Logos-05.png" alt="logo" height={46} width={140} className="mx-auto -mb-4" />
         
                   {/* Shop Text */}
                   <h1 className="text-4xl md:text-6xl text-[#000000] font-medium mb-5">Product Detail</h1>
         
                   <div className="flex justify-center items-center text-lg pb-16">
                   <Link href="/">
                  <h3 className="font-medium text-[14px] md:text-[16px] font-poppins text-[#000000]">Home</h3>
                  </Link>
                     <MdKeyboardArrowRight className="mx-2 w-[16px] md:w-[20px] h-[16px] md:h-[20px] text-[#000000]" />
                     <h3 className='font-poppins text-[14px] md:text-[16px] font-[300] text-[#000000]'>ProductDetail</h3>
                   </div>
                 </div>
               </div>
      <div className=" mx-auto px-4 py-8">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square w-full max-w-md mx-auto sm:max-w-none">
              <Image
                src={`${product?.imageUrl}`}
                alt={`${product?.name} view 1`}
                layout="responsive"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                height={400}
                width={400}
                className="object-cover rounded-lg"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 sm:justify-center overflow-x-auto">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="relative w-16 h-16 border rounded-lg cursor-pointer overflow-hidden"
                >
                  <Image
                    src={`${product?.imageUrl}`}
                    alt={`Asgaard sofa view ${index}`}
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Title and Price */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold">
                {product?.name}
              </h1>
              <br />
              <p className="text-xl  text-gray-700">$ {product?.price}.00</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-lg">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-500">
                ({product?.rating} Customer Reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {product?.description}
            </p>

           {/* Size Selection */}
<div>
  <span className="block text-sm font-medium text-gray-700">Size</span>
  <div className="flex gap-2 mt-2 ">
    {["S", "M", "L", "XL"].map((size) => (
      <button
        key={size}
        className="p-3 border rounded-lg flex items-center justify-center text-sm bg-amber-100 hover:bg-red-300"
      >
        {size}
      </button>
    ))}
  </div>
</div>


             {/* Color Selection */}
            <div>
              <span className="block text-sm font-medium text-gray-700">
                Color
              </span>
              <div className="flex gap-2 mt-2">
                <button className="w-7 h-7 rounded-full bg-purple-600" />
                <button className="w-7 h-7 rounded-full bg-black" />
                <button className="w-7 h-7 rounded-full bg-yellow-700" />
              </div>
            </div> 

            {/* Quantity and Add to Cart */}
            {product && (
              <AddTocartDynamicPage
                product={{
                  id: product._id,
                  name: product.name,
                  image: product.imageUrl,
                  price: product.price,
                  quantity: 1, 
                  stock: product.stockLevel || 0, // Ensure stock is handled
                }}
              />
            )}
           

            {/* Product Metadata */}
            <div className="space-y-2 pt-4 border-t text-sm text-gray-600">
              <div className="flex justify-between">
                <span className="text-lg">SKU</span>
                <span className="text-lg">{product?._id}</span>
              </div>
              <div className="flex justify-between">
              <span className="text-lg">Category</span>
              <span className="text-lg">{product?.category}</span>
              </div>
              <div className="flex justify-between">
              <span className="text-lg">Tags</span>
                <span>{(product?.tags || []).join(', ')}</span>
              </div>
              <div className="flex justify-between">
              <span className="text-lg">Share</span>
                 {/* Social Sharing */}
<div className="py-12 lg:py-0">
  <div className="flex  lg:gap-6 justify-start">
   
    <div className="flex items-center gap-4">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#4267B2] p-2 rounded-full text-white"
      >
        <FaFacebook size={17} />
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#FF0000] p-2 rounded-full text-white"
      >
        <FaYoutube size={17} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0077b5] p-2 rounded-full text-white"
      >
        <FaLinkedin size={17} />
      </a>
      
    </div>
  </div>
</div>
              </div>
            </div>
          </div>
        </div>
        

        <hr className="text-[#FFFFFF] w-full my-2 mb-8 " />
        <div className="my-10 text-center">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#9F9F9F]">
            <p className="text-black text-3xl font-semibold cursor-pointer hover:underline">
              Description
            </p>
            <p className="cursor-pointer text-3xl hover:underline">
              Additional Information
            </p>
            <p className="cursor-pointer  text-3xl hover:underline">Reviews [5]</p>
          </div>

          {/* Description Section */}
          <div className="grid gap-6 mt-6 text-[#9F9F9F]  text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] md:text-[18px] md:leading-[30px] px-4 sm:px-8 md:px-16 lg:px-24">
            <p>{product?.description}</p>
          </div>
        </div>
        
      </div>
      <div className="bg-gray-200 min-h-screen p-8">
        {/* Header Section */}
        <div className=" text-center mb-6 md:mb-8 border-4 border-black  bg-gradient-to-r from-pink-500 to-amber-100 p-6 rounded-lg">
  <h1 className=" text-3xl md:text-4xl font-bold text-gray-800 lg:text-3xl">
    Product Overview
  </h1>
  <p className="text-sm sm:text-base md:text-lg text-white font-semibold mt-2">
    Explore all the details, FAQs, and reviews for this product.
  </p>
</div>

      <div className="max-w-3xl mx-auto">
        <ReviewsAndRatings />
        <br />
        <br />
        <FAQAndHelpCenter />
        <br />
        <br />
      <Detail/>
      <br />
      </div>
    </div>
  <ProductPage/>
  
      <Service />
    </div>
  );
}
