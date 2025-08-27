import React from "react";
export default function Card({ image, title, overview }) {
  const truncOverview = (overview) => {
    if (overview.length > 20) {
      return overview.slice(0, 100) + "....";
    }
  };
  return (
    <div className="flex justify-center items-center   ">
      <div className=" flex shadow-xl  flex-col w-screen sm:w-full  gap-2 p-3 sm:flex-row  sm:items-start ">
        <img
          src={image}
          alt="Movie profile"
          className="w-40  mx-auto block h-40 rounded-full  sm:mx-0 sm:shrink-0"
        />
        <div className="space-y-1 text-center  sm:text-left">
          <div className="space-y-1  ">
            <p className="text-sm font-semibold break-words ">{title}</p>
            <p className="text-tiny text-gray-500 ">
              {truncOverview(overview)}
            </p>
          </div>
          <button
            onClick={() => alert("hello")}
            className="border-purple-300 border text-purple-500 hover:bg-none rounded-xl hover:bg-purple-300 hover:text-white px-2 py-1 text-xs"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
