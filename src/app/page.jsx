// pages/index.js
'use client';
import '../styles/globals.css';
import ParticlesBackground from '../components/TSparticles';
import ProjectsButton from '../components/projectsButton.jsx';
import Title from './landing/title.jsx';
import About from './landing/about.jsx';
import Carousel from './projects/carousel';
import TypedText from './landing/typedText';
import useWindowSize from './functions/useWindowWidth';

export default function Home() {
  const { width: windowWidth } = useWindowSize();

  return (
    <ParticlesBackground>
      <div className="flex flex-col items-center h-screen relative pt-40">
        <div className="w-1/2 text-center text-white">
          <TypedText/>
          <About />
          </div>
      </div>      
      <Carousel/>
    </ParticlesBackground>
  );
}
