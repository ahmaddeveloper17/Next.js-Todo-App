// Home page ...
"use client";
import React from "react";
import iconImage from "../../../public/assets/icon.png";
import profileImage from "../../../public/assets/profile.png";
import Image from "next/image";
import Link from "next/link";
import useHome from "../../../hooks/useHome";
function Home() {
  const { handleCheckboxChange, isChecked } = useHome();
  return (
    <div>
      <div className=" bg-[#F9F5EB] w-auto h-[96px] flex">
        <Image
          src={iconImage}
          alt=""
          className=" ml-[24px] pt-[24px] left-[24px]  "
        />
        <Link href="/settingPage">
          <Image
            src={profileImage}
            alt=""
            className=" ml-[24px] pt-[24px] absolute right-[24px] "
          />
        </Link>
      </div>
      <div className="home  h-full flex flex-col items-center">
        <div className="">
          <h2 className=" text-[#EA5455] mt-[80px] pl-[32px] font-ibm-plex-mono text-[55px] md:text-[74px] font-medium leading-[39px]">
            Home List.
          </h2>
        </div>
        <div className="mt-[32px]">
          <input
            type="email"
            placeholder="[task]"
            className="  placeholder-[#EA5455] w-[300px] sm:w-[450px] text-[#EA5455] pl-[32px] bg-[#F9F5EB] mt-[16px] font-ibm-plex-mono text-2xl font-medium leading-[39px] rounded-[16px] border-[5px] bordor-color-[#FF7315] lg:w-[597px] h-[58px] border-[#FF7315]"
          />
        </div>
        <div className="mt-[49px]">
          <input
            className="w-6 h-6 mr-2 cursor-pointer"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            style={{
              appearance: "none",
              border: "2px solid #FF7315",
              borderRadius: "4px",
              outline: "none",
            }}
          />
          <label
            className="font-ibm-plex-mono text-[40px] md:text-[60px] text-[#EA5455] font-medium"
            style={isChecked ? { textDecoration: "line-through" } : {}}
          >
            Completed task
          </label>{" "}
        </div>
      </div>
    </div>
  );
}
export default Home;
