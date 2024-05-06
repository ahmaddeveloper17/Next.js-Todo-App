import React from "react";
import { AddCardProps } from "@/app/types/type";
function AddCard({
  bgColor,
  borderColor,
  textColor,
  label,
  onClick,
}: AddCardProps) {
  console.log("🚀 ~ label:", label);
  console.log("🚀 ~ textColor:", textColor);
  console.log("🚀 ~ borderColor:", borderColor);
  console.log("🚀 ~ bgColor:", bgColor);
  return (
    <button
      className={` font-ibm-plex-mono mt-[10px] rounded-[55px] m-8 text-30 font-medium bg-${bgColor} border-[5px] border-${borderColor} leading-39 w-64 py-[12px] px-[32px]`}
      onClick={onClick}
    >
      <h2 className={`${textColor}`}>{label}</h2>
    </button>
  );
}

export default AddCard;
// "use client";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchData, selectLabel } from "../../redux/listSlice/ListSlice";

// const MyComponent = () => {
//   const dispatch = useDispatch();
//   const label = useSelector((state) => state?.label);

//   useEffect(() => {
//     // Fetch data when the component mounts
//     dispatch(fetchData());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Label: {label}</h1>
//     </div>
//   );
// };

// export default MyComponent;
