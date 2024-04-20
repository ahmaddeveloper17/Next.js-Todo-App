// Home page ...
import React from "react";
import iconImage from "../../../public/assets/icon.png";
import profileImage from "../../../public/assets/profile.png";
import Image from "next/image";
import Link from "next/link";
import HomeTask from "@/components/HomeTask";
function Home() {
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
        <HomeTask />
      </div>
    </div>
  );
}
export default Home;
