// pages/index.js

import ParticlesBackground from '../components/TSparticles';
import ProjectsButton from '../components/projectsButton.jsx';
import Title from './landing/title.jsx';
import About from './landing/about.jsx';
import Carousel from './projects/carousel';
import './globals.css';

export default function Home() {
  return (
    <ParticlesBackground>
      <div className="flex flex-col items-center h-screen relative pt-40">
        <div className="w-1/2 text-center text-white">
          <Title/>
          <About/>
        </div>
      </div>
      <Carousel/>
    </ParticlesBackground>
  );
}
