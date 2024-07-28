"use client";
import React from "react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Service from "@/components/service";

export default function page() {
  return (
    <>
      
      <main className="border-t-2 border-b-2 border-gray-200">
        <Service />
      </main>

      <Footer />
    </>
  );
}
