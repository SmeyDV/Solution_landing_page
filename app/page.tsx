"use client";
import NarBar from "../components/navbar";
import Hero from "../components/hero";
import Feature from "../components/feature";
import Footer from "../components/footer";
export default function Home() {
  return (
    <>
      <NarBar />
      <main>
        <Hero />
        <Feature />
      </main>
      <Footer />
    </>
  );
}
