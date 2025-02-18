import React from "react";
import { MdOutlineReplay } from "react-icons/md";

const Retake = () => {
  return (
    <button className="bg-[#346DE0] text-white px-4 py-1.5 rounded-md text-sm flex items-center gap-1">
      <MdOutlineReplay className="text-white text-xl" />
      Retake
    </button>
  );
};

export default Retake;
