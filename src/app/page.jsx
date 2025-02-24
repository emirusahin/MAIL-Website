// pages/index.js
'use client';
import '../styles/globals.css';
import 'hover.css/css/hover-min.css';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import Spacer from '../components/spacer'; 
import ParticlesBackground from '../components/TSparticles';
import About from './landing/about.jsx';
import ProjectsSection from './projects/projectsSection';
import TypedText from './landing/typedText';
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
      
      {/* Background with Particles and subtle parallax scrolling */}
      <ParticlesBackground>
        {/* Main Content Wrapper */}
        <motion.div
          className="flex flex-col items-center h-screen relative pt-64"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* Typed Text with Motion */}
          <motion.div
            className="w-1/2 text-center text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          >
            <TypedText/>
            {/* Fade in About Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.8 }}
            >
              <About />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Project Section Reveal */}
        <motion.div
          id="projects"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <ProjectsSection />
        </motion.div>

        <Spacer />
        {/* <div id="team">
          <TeamSection/>
        </div> */}
        
      </ParticlesBackground>
    </>
  );
}
