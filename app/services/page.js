"use client";
import React from "react";
import Footer from "../../components/Footer";
import Service from "../../components/Service";

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
