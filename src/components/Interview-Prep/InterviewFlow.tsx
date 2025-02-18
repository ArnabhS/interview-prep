"use client";

import React, { useState } from "react";
import ReviewComponent from "@/components/Interview-Prep/review";
import Image from "next/image";

const questions = [
  "Can you tell me a bit about yourself?",
  "Why do you want this job?",
  "What are your strengths?",
  "Tell me about a challenge you faced and how you handled it.",
];

const InterviewFlow = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <ReviewComponent />;
  }

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <a href="/uniboard/applications/interview-prep">
      <button className="bg-[#346DE033] px-3 py-2 self-start text-primary text-sm mb-4 rounded-md flex items-center gap-2"
      
      >
        <Image
        src={'/back.png'}
        width={100}
        height={100}
        className="w-2 h-2"
        alt=""
        />
         Back</button>
         </a>
      <span className="text-sm text-primary px-2 py-1 rounded-md bg-[#346DE033]">Round</span>
      <h2 className="text-[#808080] text-xl mt-6 text-center">
        {questions[currentQuestion]}
      </h2>
      <div className="bg-white border rounded-md w-full max-w-2xl mt-14">
        <p className="text-sm p-2 text-primary font-normal text-center bg-[#346DE01A]">Your Answer</p>
        <textarea
          className="w-full h-24 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        ></textarea>
      </div>
      <div className="flex justify-center w-full max-w-2xl mt-4 gap-4">
        <button
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
          disabled={currentQuestion === 0}
          className="bg-[#346DE01A] text-[#346DE0] px-4 py-2 rounded-md disabled"
        >
          Skip
        </button>
        {currentQuestion === questions.length - 1 ? (
          <button
            onClick={() => setSubmitted(true)}
            className="bg-[#346DE0] text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            className="bg-[#346DE0] text-white px-4 py-2 rounded-md disabled:opacity-50"
          >
            Next
          </button>
        )}
      </div>
      <div className="w-full max-w-2xl h-2 bg-[#DBDBDB] mt-6 rounded-full">
        <div
          className="h-2 bg-primary rounded-full"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default InterviewFlow;
