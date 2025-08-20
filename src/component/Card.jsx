import React from "react";
import profile from "../assets/img8.jpg";
export default function Card() {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex shadow-2xl  flex-col  gap-2 p-8 sm:flex-row justify-center sm:items-center sm:gap-6">
        <img
          src={profile}
          alt="Profile"
          className="w-40  mx-auto block h-40 rounded-full  sm:mx-0 sm:shrink-0"
        />
        <div className="space-y-1 text-center  sm:text-left">
          <div className="space-y-1">
            <p className="text-lg font-semibold">Pritam Shrestha</p>
            <p className="font-medium text-gray-500">Student</p>
          </div>
          <button className="border-purple-300 border text-purple-500 hover:bg-none rounded-xl hover:bg-purple-300 hover:text-white px-2 py-1">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
