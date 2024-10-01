'use client'
import React, { useCallback } from 'react'
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = ({ children }) => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0">
                <Particles 
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fullScreen: {
                            enable: false,
                            zIndex: -1 
                        },
                        fpsLimit: 50,
                        interactivity: {
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: "attract"
                                },
                                onClick: {
                                    enable: true,
                                    mode: "attract"
                                }
                            },
                        },
                        particles: {
                            number: {
                                value: 100
                            },
                            color: {
                                value: "#FFFFFF"
                            },
                            links: {
                                color: {
                                    value: "#FFFFFF"
                                },
                                enable: true,
                                opacity: 0.5
                            },
                            move: {
                                enable: true
                            },
                            opacity: {
                                value: 0.2
                            },
                            size: {
                                value: 2
                            }
                        },
                        detectRetina: true,
                    }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    }}
                />
            </div>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}

export default ParticlesBackground