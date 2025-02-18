import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#F5F5F5]">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg w-96">
        <h1 className="text-3xl font-bold text-primary">Welcome, User!</h1>
        <p className="mt-4 text-gray-600">Get ready to ace your interview with our tailored preparation tools.</p>
        <a href="/uniboard/applications/interview-prep">
        <button className="mt-6 bg-primary text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-[#2555B0] transition">
          Prepare for Interview
        </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
