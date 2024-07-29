"use client";

import React from "react";
import About from "../../components/About";
import Footer from "../../components/Footer";
function page() {
  return (
    <div>
      <main className="border-t-2 border-b-2 border-gray-200">
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default page;
