"use client"
import { MdOutlineReplay } from "react-icons/md";
import { useState } from "react"

import Image from "next/image";

export default function Review() {
  const [selectedTab, setSelectedTab] = useState("All")
  const [recommendedAnswer, setRecommendedAnswer] = useState("Click 'Generate another' to get a response.")

  const tabs = ["All", "Behavioural", "Question Type 1", "Question Type 2"]

  const questions = [
    {
      id: 1,
      question: "Can you please tell me a bit about yourself?",
      type: "Behavioural",
      demoAnswer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
    },
    {
      id: 2,
      question: "Tell me about a time you had to deliver on multiple competing priorities...",
      type: "Question Type 1",
      demoAnswer: `In my previous role, I was tasked with managing three high-priority projects...`,
    },
    {
      id: 3,
      question: "How do you handle conflict in the workplace?",
      type: "Behavioural",
      demoAnswer: `I approach workplace conflicts with a focus on open communication...`,
    },
    {
      id: 4,
      question: "Describe a project where you had to learn a new technology quickly.",
      type: "Question Type 2",
      demoAnswer: `When our team needed to implement a new cloud infrastructure...`,
    },
  ]

  const filteredQuestions = selectedTab === "All" ? questions : questions.filter((q) => q.type === selectedTab)

  const dummyAnswers = [
    "Effective communication and adaptability are key skills in any role...",
    "I approach challenges with a problem-solving mindset, ensuring efficiency...",
    "Collaboration and teamwork drive my ability to succeed in complex projects...",
    "My experience in handling diverse responsibilities has enhanced my skills...",
  ]

  const generateNewAnswer = () => {
    const randomAnswer = dummyAnswers[Math.floor(Math.random() * dummyAnswers.length)]
    setRecommendedAnswer(randomAnswer)
  }

  return (
    <div className="min-h-screen ">
      <header className="border-b">
        <div className="px-4 py-4">
          <div className="mt-4 flex items-center justify-between bg-white p-4 rounded-md">
            <div>
              <h2 className="font-medium">Data Manager</h2>
              <p className="text-sm text-gray-500">Google</p>
            </div>
            <button className="bg-[#346DE0] text-white px-4 py-1.5 rounded-md text-sm flex items-center gap-1">
            <MdOutlineReplay className="text-white text-xl"/>
                Retake</button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-4 py-1.5 rounded-md text-sm ${
                    selectedTab === tab ? "bg-[#346DE033] text-primary" : "bg-[#D0D0D0] text-[#808080]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-8 bg-white p-3 rounded-md text-[#808080]">
              {filteredQuestions.map((q) => (
                <div key={q.id} className="space-y-4">
                  <div className="flex items-start gap-2">
                    <h3 className="flex-1">{q.question}</h3>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm whitespace-nowrap">
                      {q.type}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500">Your Answer</label>
                    <div className="w-full min-h-[200px] p-4 border rounded-lg bg-white">
                      <p className="whitespace-pre-wrap">{q.demoAnswer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6 lg:sticky lg:top-6 h-fit">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Recommended Answer</h3>
              <p className="text-gray-600 whitespace-pre-wrap">{recommendedAnswer}</p>
              <button
                onClick={generateNewAnswer}
                className="flex items-center gap-2 bg-[#346DE0] text-white px-4 py-2 rounded-md"
              >
                <Image
                src={`/btn.png`}
                alt=""
                height={100}
                width={100}
                className="w-6 h-6"
                />
                Generate another
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
