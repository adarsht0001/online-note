"use client";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import Navbar from "@/components/navbar/Navbar";
import Card from "@/components/card/Card";

export default function Home() {
  const { getUser } = useContext(UserContext);
  const user = getUser();
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-screen-lg min-h-screen p-4 ">
        <div className="NotesList lg:grid grid-cols-3 gap-6 space-y-8 lg:space-y-0">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
