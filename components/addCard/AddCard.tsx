import React from "react";
import { AddCardProps } from "@/app/types/type";
function AddCard({bgColor,borderColor,textColor,label,onClick}: AddCardProps) {
  return (
    // <div
    //   style={props.buttonStyles2}
    //   className="w-[277px]  mt-[10px]   "
    // >
    <button
      // style={props.buttonStyles1}
      className={` font-ibm-plex-mono mt-[10px] rounded-[55px] m-8 text-30 font-medium bg-${bgColor} border-[5px] border-${borderColor} leading-39 py-[12px] px-[32px]`}
    onClick={onClick}
    >
      <h2 className={`text-${textColor}`}>{label}</h2>
    </button>
  );
}

export default AddCard;
