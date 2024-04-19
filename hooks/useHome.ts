// Home page ...

"use client";
import React, { useState } from "react";
function Home() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return { handleCheckboxChange, isChecked, setIsChecked };
}
export default Home;
