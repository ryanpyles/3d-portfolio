import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Banner from "./components/banner";
import Footer from "./components/footer";
import TypographyDemo from "./pages/TypographyDemo";

const Portfolio = ({ hide, setHide }: { hide: boolean; setHide: (v: boolean) => void }) => (
  <>
    <Banner hide={hide} setHide={setHide} />
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar hide={hide} />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  </>
);

const App = () => {
  const [hide, setHide] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio hide={hide} setHide={setHide} />} />
        <Route path="/typography-demo" element={<TypographyDemo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
