import React, { useState, useEffect } from "react";
import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";
import Iphone from "../components/Iphone.jsx";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader.jsx";

const Hero = () => {
    const [iphoneScale, setIphoneScale] = useState(window.innerWidth < 768 ? 4 : 5.5);

    useEffect(() => {
        function handleResize() {
            setIphoneScale(window.innerWidth < 768 ? 6 : 5.5);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
            <Element name="hero">
                <div className="container mx-auto">
                    <div className="flex flex-col-reverse md:flex-row items-stretch justify-between">
                        <div className="w-full md:w-1/2 flex-grow flex flex-col items-center max-md:mb-8 md:order-2">
                            <Canvas className="w-full" style={{ height: iphoneScale === 6 ? '600px' : '500px' }}>
                                <Suspense fallback={<CanvasLoader />}>
                                    <Iphone
                                        scale={iphoneScale}
                                        rotation={[1, 0.4, -0.5]}
                                        position={[0, 0.0, 0]}
                                    />
                                    <ambientLight intensity={0.7} color="white" />
                                    <directionalLight position={[20, 20, 20]} intensity={7.0} color={"#c684b2"} />
                                </Suspense>
                            </Canvas>

                            <div className="mt-8 md:hidden">
                                <LinkScroll to="features" offset={-100} spy smooth>
                                    <Button>How It Works</Button>
                                </LinkScroll>
                            </div>
                        </div>

                        <div className="relative z-2 max-w-512 max-lg:max-w-388 mb-10 lg:mb-0 flex-grow lg:order-1">
                            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
                                Disconnect to Reconnect.
                            </h1>
                            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
                                Unplugged helps you and your friends put your phones away and truly enjoy the moment
                                together. Just start a session, and let real conversations flow.
                            </p>

                            <div className="hidden md:block">
                                <LinkScroll to="features" offset={-100} spy smooth>
                                    <Button>How It Works</Button>
                                </LinkScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Hero;