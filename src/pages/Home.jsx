import React from "react";
import { LeftSidebar } from "../components/LeftSidebar";
import { RightSidebar } from "../components/RightSidebar";
import { DropMenu } from "../components/DropMenu";

const Home = () => {
  return (
    <section className="home">
      <LeftSidebar />
      <DropMenu />

      <RightSidebar />
    </section>
  );
};

export default Home;
