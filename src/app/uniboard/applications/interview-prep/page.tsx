import React from "react";

import InterviewForm from "@/components/Interview-Prep/InterviewForm";

const InterviewPrep = () => {
  return (
    <div className="flex">
      <div className="p-6 w-full bg-[#F5F5F5]">
        <h1 className="text-2xl text-primary font-bold ">Interview Prep</h1>
        <div className="mt-20">
        <InterviewForm />
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;
