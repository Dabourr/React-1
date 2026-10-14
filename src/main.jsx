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
            Elevated culinary 
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
              <span className="font-normal"> from over 2,000+ happy diners</span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full bg-[#FFFFFF] py-[128px]">
      <div className="mx-auto flex w-full max-w-[1216px] items-center gap-[80px]">
        <div className="relative h-[710px] w-[568px] shrink-0">
          <img
            src="/public/Professional chef carefully garnishing a gourmet plate in a high-end kitchen, close-up, shallow depth of field.svg"
            className="h-full w-full rounded-[24px] object-cover"
          />
          <div className="absolute bottom-[-20px] right-[-20px] flex flex-col gap-[4px] rounded-[24px] bg-[#222222] p-[32px]">
            <p className="font-poppins text-[32px] font-bold text-white">15+</p>
            <p className="font-poppins text-[12px] text-[#9CA3AF]">
              YEARS OF EXCELLENCE
            </p>
          </div>
        </div>
        <div className="flex w-[568px] flex-col gap-[24px]">
          <h2 className="w-[568px] font-poppins text-[48px] font-bold leading-[60px] text-[#222222]">
            Crafting stories on every plate since
            <span className="text-[#FF6B35]"> 2008.</span>
          </h2>
          <p className="w-[568px] font-poppins text-[18px] font-normal leading-[29.25px] text-[#6B7280]">
            Gourmet Bistro was born from a simple vision: to create a space
            where culinary excellence meets genuine hospitality. Our journey
            began in a small kitchen with big dreams, focusing on the purity of
            ingredients and the joy of shared meals.
          </p>
          <p className="w-[568px] font-poppins text-[18px] font-normal leading-[29.25px] text-[#6B7280]">
            Today, we continue that legacy, blending traditional techniques with
            modern innovation to bring you a menu that celebrates the best of
            the season.
          </p>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-[12px]">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-[#FF6B35]/10">
                <img
                  src="/public/fresh.svg"
                  alt="Fresh Harvest"
                  className="h-[20px] w-[20px]"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-poppins text-[16px] font-bold leading-[24px] text-[#222222]">
                  Fresh Harvest
                </p>
                <p className="font-poppins text-[12px] font-normal leading-[16px] text-[#6B7280]">
                  Daily sourced organic
                  <br />
                  ingredients.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[12px]">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-[#FF6B35]/10">
                <img
                  src="/public/expert.svg"
                  alt="Expert Chefs"
                  className="h-[20px] w-[20px]"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-poppins text-[16px] font-bold leading-[24px] text-[#222222]">
                  Expert Chefs
                </p>
                <p className="font-poppins text-[12px] font-normal leading-[16px] text-[#6B7280]">
                  Award-winning culinary team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>,
);
