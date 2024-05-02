import Image from "next/image";
import React from "react";
import Link from "next/link";
import TodoLists from "@/components/todoLists/TodoLists";
import { Images } from "@/public/assets/constants/constants";
function page() {
  return (
    <div className="bg ">
      <div className="w-auto flex">
        <Image
          src={Images.mainIcon}
          alt=""
          className=" ml-[24px] pt-[24px] left-[24px]  "
        />
        <Link href="/settingPage">
          <Image
            src={Images.settingWhiteIcon}
            alt="Image Not Found"
            className=" ml-[24px] pt-[24px] absolute right-[24px] "
          />
        </Link>
      </div>
      <div>
        <div className="  flex flex-col items-center">
          <h2 className=" text-[#F4F4F4] text-[40px] mt-[80px] pl-[32px] font-ibm-plex-mono   md:text-[64px] font-medium leading-[39px]">
            Todo Lists<span className="text-[#EA5455]">.</span>
          </h2>
        </div>
        <div className="mt-[30px] ml-[50px]  md:ml-[295px]">
          <TodoLists />
          <Link href="/addList">
            <h1 className="text-[#F4F4F4] font-medium mt-6 text-[40px] md:text-[64px] underline">
              + Add List.
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
