import { LeftSidebar } from "../components/LeftSidebar";
import { RightSidebar } from "../components/RightSidebar";
import { DropMenu } from "../components/DropMenu";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Resume } from "../components/Resume";
import { Services } from "../components/Services";
import { MySkills } from "../components/MySkills";
import { ContactSection } from "../components/ContactSection";
import { Portfolio } from "../components/Portfolio";

const Home = () => {
  return (
    <section className="home">
      <LeftSidebar />
      <DropMenu />
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
  );
};

export default Home;
