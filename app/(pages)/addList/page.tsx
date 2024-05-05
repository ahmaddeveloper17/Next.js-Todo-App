"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Images, addCardList } from "@/constants/constants";
import AddCard from "../../../components/addCard/AddCard";
import AddListsButton from "@/components/addListsButton/AddListsButton";
import axios from "axios";
import toast from "react-hot-toast";
import { getSession } from "next-auth/react";

const Page: React.FC = () => {
  const [listName, setListName] = useState("");
  const [email, setEmail] = useState("");
  const [textColor, settextColor] = useState("");
  console.log("🚀 ~ textColor:", textColor);
  const [borderColor, setBorderColor] = useState("");
  console.log("🚀 ~ borderColor:", borderColor);
  const [label, setLabel] = useState("");
  console.log("🚀 ~ label:", label);
  const [bgColor, setBgColor] = useState("");
  console.log("🚀 ~ bgColor:", bgColor);

  const sessionData = async () => {
    const session = await getSession();
    const email = session?.user?.email || "";
    setEmail(email);
  };
  useEffect(() => {
    sessionData();
  }, []);

  const handleCreateList = async () => {
    try {
      console.log(listName);

      const response = await axios.post(
        "http://localhost:3000/api/todoList",
        {
          ListName: listName,
          Email: email,
          textColor: textColor,
          borderColor: borderColor,
          label: label,
          bgColor: bgColor,
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

  const handleSelectColor = (value: any) => {
    setBgColor(value.bgColor);
    setBorderColor(value.borderColor);
    setLabel(value.label);
    settextColor(value.textColor);
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
          className="placeholder-Accent text-Accent bg-Background mt-[16px] pl-[32px] pr-[32px] font-ibm-plex-mono text-2xl font-medium leading-[39px] rounded-[30px] border-[5px] bordor-color-Border max-w-[447px] h-[58px] border-Border"
          value={listName}
          onChange={handleInputChange}
        />
      </div>
      <div className=" flex flex-wrap flex-col md:flex-row md:ml-[277px] items-center md:mt-[31px]">
        {addCardList.map((value, i) => {
          return (
            <AddCard
              key={i}
              label={value.label}
              bgColor={value.bgColor}
              borderColor={value.borderColor}
              textColor={value.textColor}
              onClick={() => handleSelectColor(value)}
            />
          );
        })}
        {/* <AddCard
          label="Vintage Garden"
          bgColor="#CCF0C3"
          borderColor="#BCA3CA"
          textColor="textColor-100"
        />
        <AddCard
          label="Vintage Garden"
          bgColor="amber-400"
          borderColor=""
          textColor="textColor-200"
        /> */}
        {/* <AddCard
          propName="Cosmic Symphony jshj"
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
        /> */}
      </div>
      <div>
        <AddListsButton onClick={handleCreateList} />
      </div>
    </div>
  );
};
export default Page;
