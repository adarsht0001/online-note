"use client";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Card from "@/components/card/Card";
import Addnote from "@/components/addNote/Addnote";
import axios from "axios";

export default function Home() {
  const { getId } = useContext(UserContext);
  const [notes, setNotes] = useState([]);
  const user = getId();
  useEffect(() => {
    axios.get(`/api/notes/${user}`).then((res) => {
      console.log(res.data);
      setNotes(res.data);
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-screen-lg min-h-screen p-4 ">
        <div className="NotesList lg:grid grid-cols-3 gap-6 space-y-8 lg:space-y-0">
          <Addnote />
          {notes.map((i) => {
            return <Card key={i._id} data={i} />;
          })}
        </div>
      </div>
    </>
  );
}
