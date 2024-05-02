"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Images } from "@/public/assets/constants/constants";
import StyleSheet from "./style";
import AddCard from "../../../components/addCard/AddCard";
import AddListsButton from "@/components/addListsButton/AddListsButton";
import axios from "axios";
import toast from "react-hot-toast";

const Page: React.FC = () => {
  const [listName, setListName] = useState("");

  const handleCreateList = async () => {
    try {
      console.log(listName);

      const response = await axios.post(
        "http://localhost:3000/api/todoList",
        {
          ListName: listName,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = response.data;
      console.log(responseData);
      toast.success("List Added Successfully");
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setListName(event.target.value);
  };

  return (
    <div className="bg ">
      <div className="flex justify-between mt-[25px] px-[25px]">
        <Image src={Images.mainIcon} alt="" />
        <Link href="/settingPage">
          <Image src={Images.settingWhiteIcon} alt="" />
        </Link>
      </div>
      <div className=" text-center">
        <input
          type="text"
          placeholder="List name"
          className="placeholder-[#F4F4F4] text-[#F4F4F4] bg-[#232020] mt-[16px] pl-[32px] pr-[32px] font-ibm-plex-mono text-2xl font-medium leading-[39px] rounded-[30px] border-[5px] bordor-color-[#FF7315] max-w-[447px] h-[58px] border-[#FF7315]"
          value={listName}
          onChange={handleInputChange}
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
      <div>
        <AddListsButton onClick={handleCreateList} />
      </div>
    </div>
  );
};
export default Page;
