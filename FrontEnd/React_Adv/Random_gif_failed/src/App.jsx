import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return (
    <div className="w-full h-full flex flex-col background items-center relative">
      <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px] text-3xl font-bold px-10 py-2">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
