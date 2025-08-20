import React from "react";
import InputType from "../component/inputType";
import ButtonType from "../component/Button";
export default function Login() {
  return (
    <div className="h-screen   w-screen flex items-center px-40  bg-gray-100">
      <div className="  text-center md:text-left">
        <h1 className="text-5xl text-blue-600 font-bold">facebook</h1>
        <p className=" text-2xl/snug">
          Connect with friends and the world around you on Facebook.
        </p>
      </div>

      <div className="container  flex flex-col items-center">
        <form action="" className="shadow-lg w-80 p-4  bg-white rounded-lg">
          <InputType type="text" placeholder="Email or phone number" />
          <InputType type="password" placeholder="Password" />
          <ButtonType value="Login" type="submit" />
          <div className="text-center  my-2">
            <a href="#" className="text-blue-700  text-xs font-medium">
              Forgot password ?
            </a>
          </div>
          <hr className="text-gray-300" />
          <div className="text-center">
            <ButtonType type="button" value="Create New account" />
          </div>
        </form>
        <p className="text-center text-sm py-4 ">
          <span className="font-semibold text-center w-full">Create page</span>{" "}
          for celebrity,brand or business.
        </p>
      </div>
    </div>
  );
}
