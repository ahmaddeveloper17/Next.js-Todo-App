// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

// const usePage = () => {
//   const [listName, setListName] = useState("");
//   const handleCreateData = async () => {
//     try {
//       console.log(listName);

//       const response = await axios.post(
//         "http://localhost:3000/api/addList",
//         {
//           ListName: listName,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const responseData = response.data;
//       console.log(responseData);
//       toast.success("List Added Successfully");
//     } catch (error) {
//       console.error("Error creating data:", error);
//     }
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setListName(event.target.value);
//   };


//   return {handleCreateData , handleInputChange , listName ,setListName}
// };
// export default usePage;
