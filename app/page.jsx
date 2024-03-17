"use client"
import { React,useState,useEffect } from 'react';
import axios from 'axios';

export default function Home() {
// We initialize our state by calling useState in our function component.
// useState accepts an initial state and returns two values:
  const [Images, setImages] = useState([])
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("red")

  useEffect(() => {
    alert("Count was changed")
    setColor("blue")
  }, [count])

// The React useState Hook allows us to track state in a function component.
// State generally refers to data or properties that need to be tracking in an application.
  useEffect(() => {
    const getImage = async () =>{
      try {      
        // console.log("image lelo le baba")
        const response = await axios.get("https://picsum.photos/v2/list") // promise need async and await
        // console.log(response)
        const data = response.data;
        setImages(data)
        // console.log(Images);
      } catch (error) {
        console.log("Error :", error)
      }
    }
    getImage();
  },)
  
  return (
    <>
    <button className='text-2xl uppercase font-bold text-center flex row my-10 mx-auto' onClick={() => setCount((count) => count + 1)}>
          count is {count} {color}
    </button>
    <div className="p-10 ">
      {Images.map((elem,i)=>{
        return <img 
        key={i} 
        src={elem.download_url} 
        width={300} 
        height={300}
        className='m-3 inline rounded'
        ></img>
      })}
    </div>
    </>
  );
}
