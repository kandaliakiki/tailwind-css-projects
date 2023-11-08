import React from "react";
import Button from "./Button";

const InputField = () => {
  return (
    <div className=" justify-between flex border-2 border-slate-gray py-2 pr-2 pl-5 rounded-full w-full">
      <input
        className="w-8/12 focus:outline-none bg-transparent "
        placeholder="subscribe@nike.com"
      ></input>

      <Button label="Sign up"></Button>
    </div>
  );
};

export default InputField;
