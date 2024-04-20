// Add List ...
import Image from "next/image";
import React from "react";
import iconImage from "../../../public/assets/icon.png";
import settingWhite from "../../../public/assets/settingWhite.png";
import Link from "next/link";
import StyleSheet from "./style";
import AddCard from "../../../components/AddCard";

function page() {
  return (
    <div className="bg ">
      <div className="flex justify-between mt-[25px] px-[25px]">
        <Image src={iconImage} alt="" />
        <Link href="/settingPage">
          <Image src={settingWhite} alt="" />
        </Link>
      </div>
      <div className=" text-center">
        <input
          type="text"
          placeholder="list name"
          className=" placeholder-[#F4F4F4] text-[#F4F4F4] bg-[#232020] mt-[16px] pl-[32px] font-ibm-plex-mono text-2xl font-medium leading-[39px] rounded-[30px] border-[5px] bordor-color-[#FF7315] max-w-[447px] h-[58px] border-[#FF7315]"
        />
      </div>
      <div className=" flex flex-wrap flex-col md:flex-row md:ml-[277px] items-center md:mt-[31px]">
        <AddCard
          propName="Vintage Garden"
          buttonStyles1={StyleSheet.one1}
          buttonStyles2={StyleSheet.one2}
        />
        <AddCard
          propName="Cosmic Symphony"
          buttonStyles1={StyleSheet.two1}
          buttonStyles2={StyleSheet.two2}
        />
        <AddCard
          propName="Rustic Charm"
          buttonStyles1={StyleSheet.three1}
          buttonStyles2={StyleSheet.three2}
        />
        <AddCard
          propName="Sunset Serenade"
          buttonStyles1={StyleSheet.four1}
          buttonStyles2={StyleSheet.four2}
        />
        <AddCard
          propName="Industrial Chic"
          buttonStyles1={StyleSheet.five1}
          buttonStyles2={StyleSheet.five2}
        />
        <AddCard
          propName="Blackout Neutrals"
          buttonStyles1={StyleSheet.six1}
          buttonStyles2={StyleSheet.six2}
        />
        <AddCard
          propName="Vibrant Spectrum"
          buttonStyles1={StyleSheet.seven1}
          buttonStyles2={StyleSheet.seven2}
        />
        <AddCard
          propName=" Coastal Sunrise"
          buttonStyles1={StyleSheet.eight1}
          buttonStyles2={StyleSheet.eight2}
        />
        <AddCard
          propName="Oceanic Serenity"
          buttonStyles1={StyleSheet.nine1}
          buttonStyles2={StyleSheet.nine2}
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[210px] mt-[94px] border-[#FF7315] h-[63px] bg-[#FF7315] border-[5px] rounded-[55px]">
          <button className="font-ibm-plex-mono text-30 font-medium leading-39 text-[#232020] py-[12px] px-[55px]">
            <h2>Add List.</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
