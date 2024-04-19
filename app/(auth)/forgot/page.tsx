import React from "react";
import Image from "next/image";
import iconImage from "../../../public/assets/icon.png";

function page() {
  return (
    <div className="bg w-full h-full flex flex-col ">
      <Image
        src={iconImage}
        alt=""
        className=" ml-[24px] pt-[24px] left-[24px]  "
      />
      <div className="bg w-full h-full flex flex-col justify-center items-center">
        <div className="">
          <h2 className="font-ibm-mono  text-[#F4F4F4] pl-[32px] text-3xl font-medium leading-[39px]">
            Password
          </h2>
          <input
            type="Password"
            placeholder="Password"
            className=" placeholder-[#F4F4F4] text-[white] pl-[32px] bg-[#232020] mt-[16px] font-ibm-plex-mono text-3xl font-medium leading-[39px] rounded-[30px] border-[5px] bordor-color-[#FF7315] w-[307px] sm:w-[447px] h-[58px] border-[#FF7315]"
          />
        </div>

        <div className="">
          <h2 className=" text-[#F4F4F4] mt-[32px] font-ibm-plex-mono pl-[32px] text-3xl font-medium leading-[39px]">
            Confirm Password
          </h2>
          <input
            type="Password"
            placeholder="Confirm Password"
            className=" placeholder-[#F4F4F4] text-[white] pl-[32px] bg-[#232020] mt-[16px] font-ibm-plex-mono text-3xl font-medium leading-[39px] rounded-[30px] border-[5px] bordor-color-[#FF7315] w-[307px] sm:w-[447px] h-[58px] border-[#FF7315]"
          />
          <h3 className="font-ibm-mono text-[#F4F4F4] mt-[16px] font-medium text-20 leading-26 text-right">
            Forget Password
          </h3>
        </div>
        <div className="w-[174px] border-[#FF7315] h-[63px] left-496 mt-[10px] bg-[#FF7315] border-[5px] rounded-[55px] ">
          <button className=" font-ibm-plex-mono w-[156px] text-30 font-medium leading-39 text-left text-[#232020] py-[12px] px-[60px]">
            <h2>Sign Up</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
