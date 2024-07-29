"use client";
import NarBar from "../components/NavBar";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
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
