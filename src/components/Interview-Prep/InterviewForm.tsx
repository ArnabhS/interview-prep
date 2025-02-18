"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import InterviewQuestions from "@/components/Interview-Prep/InterviewFlow"; // Import InterviewQuestions component
import Retake from "../ui/Retake";

const InterviewForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [selectedRound, setSelectedRound] = useState("Question Type 1");
  const [startInterview, setStartInterview] = useState(false);

  const handleStartInterview = () => {
    setIsOpen(false);
    setStartInterview(true);
  };

  return (
    <>
      {!startInterview ? (
        <div>
          <div className="flex items-center gap-6">
            <Button onClick={() => setIsOpen(true)}>
              + Start New Interview
            </Button>
            <div className="bg-white w-80 py-2 px-4 flex justify-between items-center">
              <div>
                <p className="text-base text-[#373737] font-semibold">Data Manager</p>
                <p className="text-sm font-thin">Google</p>
              </div>
              <Retake/>
            </div>
            <div className="bg-white w-80 py-2 px-4 flex justify-between items-center">
              <div>
                <p className="text-base text-[#373737] font-semibold">Data Manager</p>
                <p className="text-sm font-thin">Google</p>
              </div>
             <Retake/>
            </div>
          </div>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-[550px]">
                <h2 className="text-lg font-bold text-center mb-4 text-primary">
                  Interview Prep
                </h2>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <div className="w-1/2">
                      <label className="block text-sm font-normal text-[#808080] mb-1">
                        Role
                      </label>
                      <input
                        type="text"
                        className="border p-2 rounded w-full"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="block text-sm font-normal text-[#808080] mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        className="border p-2 rounded w-full"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-normal text-[#808080] mb-1">
                      Job Description
                    </label>
                    <textarea
                      className="border p-2 rounded w-full h-20"
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                    />
                  </div>
                  <div className="max-w-[80%] w-full">
                    <p className="mb-1 font-normal text-[#808080]">Round</p>
                    <div className="flex gap-2 text-sm">
                      {[
                        "Question Type 1",
                        "Question Type 2",
                        "Question Type 3",
                      ].map((type) => (
                        <button
                          key={type}
                          className={`px-3 py-1 rounded ${
                            selectedRound === type
                              ? "bg-primary text-white"
                              : "bg-[#D0D0D0]"
                          }`}
                          onClick={() => setSelectedRound(type)}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={handleStartInterview}
                      className="w-1/4 bg-primary text-sm text-white py-2 rounded mt-3"
                    >
                      Start Interview
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      ) : (
        <InterviewQuestions />
      )}
    </>
  );
};

export default InterviewForm;
