"use client";
import React from "react";
import useHome from "../hooks/useHome";
function HomeTask() {
  const { handleCheckboxChange, isChecked } = useHome();

  return (
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
  );
}

export default HomeTask;
