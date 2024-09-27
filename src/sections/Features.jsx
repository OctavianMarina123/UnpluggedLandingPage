import { Element } from "react-scroll";

import { details, features } from "../constants/index.jsx";
import Button from "../components/Button.jsx";
import {FaCheckCircle, FaRocket, FaStar} from "react-icons/fa";

const Features = () => {
    return (
        <section>
            <Element name="features">
                <div className="container">
                    <div className="relative flex flex-col border-2 border-s3 rounded-7xl overflow-hidden gap-3">
                        {features.map(({ id, icon, caption, title, text, button }, index) => (
                            <div
                                key={id}
                                className={`relative z-2 px-5 pb-5 flex-auto border-2 border-s3 rounded-3xl flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                            >
                                {/* Imaginea */}
                                <div className="w-full md:w-1/3 flex items-center justify-center mb-5 md:mb-0">
                                    <div className="md:-mr-3 flex items-center justify-center flex-col">
                                        <div className="w-0.5 h-16 bg-s3" />
                                        <img
                                            src={icon}
                                            className="object-contain"
                                            width={200}
                                            alt={title}
                                        />
                                    </div>
                                </div>

                                {/* Textul */}
                                <div className="w-full md:w-2/3">
                                    <p className="caption mb-5">{caption}</p>
                                    <h2 className="max-w-400 mb-7 h3 text-p4">
                                        {title}
                                    </h2>
                                    <p className="mb-11 body-1">{text}</p>
                                </div>
                            </div>
                        ))}
                        
                        <ul className="relative flex flex-row justify-around gap-x-5 px-[5%] border-2 border-s3 rounded-7xl">
                            <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />

                            {details.map(({ id, icon, title }, index) => (
                                <li key={id} className="relative flex flex-col items-center pt-16 px-4 pb-14">
                                    <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20">
                                        {index === 0 && <FaStar size={30} className="text-yellow-500"/>}
                                        {index === 1 && <FaCheckCircle size={30} className="text-green-500"/>}
                                        {index === 2 && <FaRocket size={30} className="text-blue-500"/>}
                                    </div>

                                    {/* Titlul */}
                                    <h3 className="relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase">
                                        {title}
                                    </h3>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Features;