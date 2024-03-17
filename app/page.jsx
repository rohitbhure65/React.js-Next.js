"use client"
import { React,useState } from 'react';
import axios from 'axios';
export default function Home() {
  const [Images, setImages] = useState([])
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
  return (
    <>
    <button onClick={()=>{getImage();}} className="px-5 py-2 bg-green-400 text-white font-bold rounded-md mt-10 ml-10">Get image</button>
    <div className="p-10 ">
      {Images.map((elem,i)=>{
        return <img 
        key={i} 
        src={elem.download_url} 
        width={300} 
        height={300}
        className='m-3 inline rounded '></img>
      })}
    </div>
    </>
  );
}
