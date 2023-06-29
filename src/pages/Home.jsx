import { LeftSidebar } from "../components/LeftSidebar";
import { RightSidebar } from "../components/RightSidebar";
import { DropMenu } from "../components/DropMenu";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Resume } from "../components/Resume";
import { Services } from "../components/Services";
import { MySkills } from "../components/MySkills";
import { ContactSection } from "../components/ContactSection";
import { useActiveMenu } from "react-active-menu";

const Home = () => {
  const { registerContainer, registerSection, registerTrigger } = useActiveMenu(
    {
      smooth: true,
    }
  );
  return (
    <section className="home">
      <LeftSidebar />
      <DropMenu />
      <main ref={registerContainer}>
        {/* sections */}
        <Hero />
        <About />
        <Resume />
        <Services />
        <MySkills />
        <ContactSection />
        {/* sections */}
      </main>
      <RightSidebar />
    </section>
  );
};

export default Home;
