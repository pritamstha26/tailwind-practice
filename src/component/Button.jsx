import React from "react";

export default function ButtonType({ value, type }) {
  return (
    <>
      {type === "submit" ? (
        <button type="submit" className="w-full    bg-blue-500 btn ">
          {value}
        </button>
      ) : (
        <button type="button" className="bg-green-500 mt-5 px-3 btn">
          {value}
        </button>
      )}
    </>
  );
}
