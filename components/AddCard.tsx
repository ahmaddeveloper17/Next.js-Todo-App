import React from "react";
interface AddCardProps {
  propName: string;
  buttonStyles1?: React.CSSProperties;
  buttonStyles2?: React.CSSProperties;
}
function AddCard(props: AddCardProps) {
  return (
    <div
      style={props.buttonStyles2}
      className="w-[277px]  mt-[10px] rounded-[55px] "
    >
      <button
        style={props.buttonStyles1}
        className=" font-ibm-plex-mono text-30 font-medium leading-39 py-[12px] px-[50px]"
      >
        <h2>{props.propName}</h2>
      </button>
    </div>
  );
}

export default AddCard;
