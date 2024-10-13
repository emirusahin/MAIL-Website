// pages/index.js
'use client';
import '../styles/globals.css';
import 'hover.css/css/hover-min.css';
import Spacer from '../components/spacer'; 
import ParticlesBackground from '../components/TSparticles';
import About from './landing/about.jsx';
import ProjectsSection from './projects/projectsSection';
import TypedText from './landing/typedText';
import TeamSection from './team/teamSection';
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <title>McGill AI Lab - Advancing AI Research</title>
        <meta name="description" content="Explore innovative AI research projects at McGill University." />
        <meta property="og:title" content="McGill AI Lab" />
        <meta property="og:description" content="Advancing artificial intelligence research and applications." />
        <meta property="og:url" content="https://mcgillailab.co" />
        <link rel="canonical" href="https://mcgillailab.co" />
      </Head>
      <ParticlesBackground>
        <div className="flex flex-col items-center h-screen relative pt-64">
          <div className="w-1/2 text-center text-white">
            <TypedText/>
            {/* <About /> */}
            </div>
        </div>
        <div id="projects">
          <ProjectsSection/>
        </div>
        <Spacer/>
        <div id="team">
          <TeamSection/>
        </div>
        
      </ParticlesBackground>
    </>
  );
}
