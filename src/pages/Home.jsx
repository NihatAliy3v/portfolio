import React from "react";
import { LeftSidebar } from "../components/LeftSidebar";
import { RightSidebar } from "../components/RightSidebar";
import { DropMenu } from "../components/DropMenu";
import { Hero } from "../components/Hero";

const Home = () => {
  return (
    <section className="home">
      <LeftSidebar />
      <DropMenu />
      <main>
        {/* sections */}
        <Hero />
        {/* sections */}
      </main>
      <RightSidebar />
    </section>
  );
};

export default Home;
