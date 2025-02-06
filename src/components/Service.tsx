export default function Service (){

    return(
<div>
     {/* Additional Information Section */}
     <div className="bg-[#FAF4F4] w-full py-[40px] mb-8 md:mb-8 md:py-[80px] border-t border-b border-gray-200">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-6">
          <div className="max-w-xs mx-auto">
            <h3 className="font-poppins text-[#000000] text-lg md:text-[26px] text-nowrap font-semibold mb-2">Free Delivery</h3>
            <p className="text-[#9F9F9F] font-poppins text-sm md:text-[20px] font-normal leading-tight">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          <div className="max-w-xs mx-auto">
            <h3 className="font-poppins text-[#000000] text-lg md:text-[26px] text-nowrap font-semibold mb-2">90 Days Return</h3>
            <p className="text-[#9F9F9F] font-poppins text-sm md:text-[20px] text-wrap font-normal leading-tight">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          <div className="max-w-xs mx-auto">
            <h3 className="font-poppins text-[#000000] text-lg md:text-[26px] text-nowrap font-semibold mb-2">Secure Payment</h3>
            <p className="text-[#9F9F9F] font-poppins text-sm md:text-[20px] font-normal leading-tight">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
</div>
    )
}