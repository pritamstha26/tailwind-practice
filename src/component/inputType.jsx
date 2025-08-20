import React from "react";

export default function InputType({ placeholder, type = "text" }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="mb-4 py-2 px-4 border w-full border-gray-300 placeholder:text-sm rounded-lg focus:outline-none    focus:ring-1 ring-blue-500 "
      />
    </>
  );
}
