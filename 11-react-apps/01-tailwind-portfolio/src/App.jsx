import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
    </>
  );
}
