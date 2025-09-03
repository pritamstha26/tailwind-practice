import React from "react";
import { useNavigate } from "react-router-dom";
export default function Card({ image,overview,title,...rest}) {
  const navigate  = useNavigate()
  const truncOverview = (overview) => {

    if(!overview) return "";
 return overview.length>100? overview.slice(0,100) + "....": overview;
  };
  return (
    <div className="flex justify-center items-stretch h-full ">
      <div className=" flex shadow-xl  flex-col w-screen sm:w-full  gap-2 p-3 sm:flex-row  sm:items-start ">
        <img
          src={image}
          alt="Movie profile"
          className="w-40  mx-auto block h-40 rounded-full  sm:mx-0 sm:shrink-0"
        />
        <div className="space-y-1 text-center flex flex-col justify-between flex-1  sm:text-left">
          <div className="space-y-1  ">
            <p className="text-md font-semibold break-words ">{title}</p>
            <p className="text-sm text-gray-500 ">
              {truncOverview(overview)}
            </p>
          </div>
          <button
            onClick={() => navigate('/single-movie',{
              state:{overview,title,...rest}
            })}
            className="border-purple-300 border text-purple-500 hover:bg-none rounded-xl hover:bg-purple-300 hover:text-white px-2 py-1 text-xs"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
