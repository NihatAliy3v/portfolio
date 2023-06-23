import React from "react";
import { LeftSidebar } from "../components/LeftSidebar";
import { RightSidebar } from "../components/RightSidebar";
import { DropMenu } from "../components/DropMenu";
import { Hero } from "../components/Hero";
import { About } from "../components/About";

const Home = () => {
  return (
    <section className="home">
      <LeftSidebar />
      <DropMenu />
      <main>
        {/* sections */}
        <Hero />
        <About/>
        {/* sections */}
      </main>
      <RightSidebar />
    </section>
  );
};

export default Home;
