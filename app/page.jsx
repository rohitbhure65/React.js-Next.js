"use client"
import { useState } from "react";
import Header from "./Components/Header";

export default function Home() {
  const [user, setUser] = useState("Rohit")
  const [editor, setEditor] = useState("Ritesh")
  return (
    <>
      <Header user={user} editor={editor}/>
    </>
  );
}
