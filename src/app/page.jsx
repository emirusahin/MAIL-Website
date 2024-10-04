// pages/index.js
'use client';
import '../styles/globals.css';
import Spacer from '../components/spacer'; 
import ParticlesBackground from '../components/TSparticles';
import About from './landing/about.jsx';
import ProjectsSection from './projects/projectsSection';
import TypedText from './landing/typedText';
import TeamSection from './team/team';


export default function Home() {
  return (
    <ParticlesBackground>
      <div className="flex flex-col items-center h-screen relative pt-40">
        <div className="w-1/2 text-center text-white">
          <TypedText/>
          <About />
          </div>
      </div>
      <div id="projects"> {/* Ensure this ID matches */}
        <ProjectsSection/>
      </div>
      <Spacer/>
      <div id="team"> {/* Ensure this ID matches */}
        <TeamSection/>
      </div>
      
    </ParticlesBackground>
  );
}
