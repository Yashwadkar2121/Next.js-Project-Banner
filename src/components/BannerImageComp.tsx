"use client";
import Image from "next/image";
import { useState } from "react";

function BannerImageComp() {
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const handleEditClick = () => {
    setShowBottomSheet(true);
  };

  const handleBottomSheetClose = () => {
    setShowBottomSheet(false);
  };

  return (
    <div>
      <div className="flex justify-between gap-5">
        <div className="relative h-[400px] w-1/2 ">
          <div>
            <Image
              src="https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/square.png"
              layout="fill"
              alt="Banner image"
            />
          </div>
          <div className="absolute right-0 p-5 w-full text-right">
            <i
              className="fa-solid fa-pen"
              style={{ color: "white" }}
              onClick={handleEditClick}
            ></i>
          </div>
          <div className="absolute mt-8 p-5 w-full">
            <h3 className="text-white text-4xl font-bold">
              Limited Time <br /> Offer
            </h3>
            <p className="text-white text-sm mt-2 font-light">
              Up to 50% off on selected item. Grab your now!
            </p>
          </div>
          <div className="mt-44 absolute h-[160px] w-full text-left">
            <Image
              src="https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/square.png"
              layout="fill"
              alt="Banner image"
              className="px-20"
            />
            <button type="button" className=" mt-40 pl-24 text-base">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      {showBottomSheet && (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4">
          <h2>Edit Banner</h2>
          <form>
            <label>
              Title:
              <input type="text" />
            </label>
            <label>
              Description:
              <textarea />
            </label>
            <button type="submit">Save</button>
          </form>
          <button onClick={handleBottomSheetClose}>Close</button>
        </div>
      )}
    </div>
  );
}

export default BannerImageComp;
