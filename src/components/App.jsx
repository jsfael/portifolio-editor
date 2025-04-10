import React from "react";
import NavBar from "./Navbar";
import Hero from "./Hero/Hero";
import Plataforms from "./Plataforms";
import Clients from "./Clients";
import Contact from "./Contact";
import Marketing from "./Marketing";
import ScrollLinked from "./ScrollLinked";
import ToTopButton from "./ToTopButton";
import FeaturesSection from "./FeaturesSection";

const App = () => {
  return (
    <div>
      <ScrollLinked />
      <div className="relative h-full w-full bg-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
      </div>
      <div className="relative z-10 container mx-auto px-8">
        <NavBar />
        <ToTopButton />
        <div className="flex flex-col gap-20 mt-8">
          <Hero />
          <Marketing />
          <Plataforms />
          <FeaturesSection />
          <Clients />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
