import React from "react";
import Sidebar from "@/components/ui/Sidebar";
import InterviewFlow from "@/components/Interview-Prep/InterviewFlow";

const InterviewQuestions = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6">
        <InterviewFlow />
      </div>
    </div>
  );
};

export default InterviewQuestions;
