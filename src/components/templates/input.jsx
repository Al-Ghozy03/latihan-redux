import React from "react";

export default function Input({active,...props}) {
  return (
    <React.Fragment>
      <div className="w-full relative border">
        <input {...props} type="text" id="name" className="border px-4 pt-2 pb-4 w-full focus:outline-none" />
        <span className={`${active?"w-4 h-12 block border bg-blue-500 absolute top-0 right-0":"hidden"}`}></span>
      </div>
    </React.Fragment>
  );
}
