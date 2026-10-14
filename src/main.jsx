import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <header className="w-full bg-[#F8F9FACC] h-[81px] pl-[32px] pr-[32px]">
      <nav className="h-full flex justify-between items-center px-8">
        <div className="flex gap-2 items-center">
          <img src="/public/nav.svg" className="pt-5" />

          <span className="text-[20px] font-bold text-[#222222] font-poppins">
            Gourmet Bistro
          </span>
        </div>

        <div className="flex items-center gap-8">
          <a className="text-[#222222] font-poppins s-[20px]">Home</a>
          <a className="text-[#222222] font-poppins s-[20px]">Menu</a>
          <a className="text-[#222222] font-poppins s-[20px]">Our Story</a>
          <a className="text-[#222222] font-poppins s-[20px]">Gallery</a>
        </div>

        <div className="bg-[#FF6B35] rounded-[33554400px] py-[10px] px-2.5 font-poppins font-normal text-[16px] text-white font-size: 24px">
          <p>Book a Table</p>
        </div>
      </nav>
    </header>
    <section className="relative w-full h-[921.5900268554688px]">
      <img src="/public/Main.svg" className="w-full h-full object-cover" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-172.5 flex flex-col items-start gap-6">
          <div className="bg-[#FF6B351A] rounded-full py-1.5 px-4 w-fit">
            <p className="text-[#FF6B35] font-poppins text-[14px] font-bold">
              THE ART OF DINING
            </p>
          </div>
          <h1 className="text-[#FFFFFF] text-[72px] font-poppins font-bold leading-22.5 ">
            Elevated culinary{" "}
            <span className="text-[#FF6B35]">experiences</span> for every
            palate.
          </h1>
          <p className="w-lg text-[#E5E7EB] text-[20px] leading-[32.5px] font-poppins font-normal">
            Discover a symphony of flavors crafted with locally sourced
            ingredients and exceptional passion.
          </p>
          <div className="flex items-center gap-4">
            <button className="flex h-15 items-center gap-2 rounded-2xl bg-[#FF6B35] px-8 py-4">
              <img src="/public/menu.svg" />
              <span>View Menu</span>
            </button>
            <button className="flex h-15.5 items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 backdrop-blur-md text-white">
              <img src="/public/book.svg" />
              <span>Book a Table</span>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <img
                src="/public/1.png"
                className="w-10 h-10 rounded-full border-2 border-[#222222] object-cover"
              />

              <img
                src="/public/2.png"
                className="-ml-2.5 w-10 h-10 rounded-full border-2 border-[#222222] object-cover"
              />

              <img
                src="/public/3.png"
                className="-ml-2.5 w-10 h-10 rounded-full border-2 border-[#222222] object-cover"
              />
            </div>
            <p className="text-white text-[16px] leading-6 font-poppins">
              <span className="font-bold">4.9-5 </span>
              <span className="font-normal">from over 2,000+ happy diners</span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full bg-[#FFFFFF] ">
      <div className="w-304 h-177.5 gap-80px flex items-center px-88 py-32">
        <div className="relative">
          <img
            src="/public/Professional chef carefully garnishing a gourmet plate in a high-end kitchen, close-up, shallow depth of field.svg"
            className="w-142 h-177.5 object-cover"
          />
          <div className="absolute -bottom-5 -right-5 bg-[#222222] rounded-3xl p-8 flex flex-col gap-1">
            <p className="text-white text-[32px] font-bold">15+</p>

            <p className="text-[#9CA3AF] text-[12px]">YEARS OF EXCELLENCE</p>
          </div>
        </div>
        
      </div>
    </section>
  </>,
);
