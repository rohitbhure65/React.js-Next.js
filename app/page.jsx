"use client"
import react, { useState } from "react";
export default function Home() {
  const [marks, setMarks] = useState(80) // usestatesnippet

  const changeMarks = ()=>{
    console.log("hell ddfo")
  }
  return (
    <>
      <h1 className="text-5xl font-bold">my total marks is {marks}</h1>
      <button onClick={()=>{setMarks(66);}} className="bg-gray-400 px-5 py-2 rounded mt-10">update</button>
    </>
  );
}
