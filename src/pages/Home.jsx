// Components
import { LeftSidebar } from "../components/LeftSidebar";
import { RightSidebar } from "../components/RightSidebar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Resume } from "../components/Resume";
import { Services } from "../components/Services";
import { MySkills } from "../components/MySkills";
import { ContactSection } from "../components/ContactSection";
import { Portfolio } from "../components/Portfolio";
import { Loading } from "../components/Loading";
// React
import { useEffect, useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1100);
  }, []);
  return (
    <>
      {!loading ? (
        <section className="home">
          <LeftSidebar />
          {/* <DropMenu /> */}
          <main>
            {/* sections */}
            <Hero />
            <About />
            <Resume />
            <Services />
            <MySkills />
            <Portfolio />
            <ContactSection />
            {/* sections */}
          </main>
          <RightSidebar />
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
