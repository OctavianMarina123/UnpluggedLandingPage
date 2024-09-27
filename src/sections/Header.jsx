import React, {useEffect, useState} from 'react'
import {Link as LinkScroll} from 'react-scroll'
import { FaPlug, FaTimes} from 'react-icons/fa'
import clsx from "clsx";


const Header = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 32);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const NavLink = ({ title }) => (
        <LinkScroll
            onClick={() => setIsOpen(false)}
            to={title}
            offset={-100}
            spy
            smooth
            activeClass="nav-active"
            className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
        >
            {title}
        </LinkScroll>
    );

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
                hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]",
            )}
        >
            <div className="container flex h-14 items-center max-lg:px-5">
                <a className="lg-hidden flex-1 cursor-pointer z-2">
                    <img src="images/UnpluggedWebWhiteText.svg" width={180} height={83} alt="logo"/>
                </a>

                <div className={clsx('w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0',
                    isOpen ? 'max-lg:opacity-100':'max-lg:pointer-events-none' )}>
                    <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6
                    max-lg:overflow-hidden sidebar-before max-md:px-4">
                        <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
                            <ul className="flex max-lg:block max-lg:px-12">
                                <li className="nav-li">
                                    <NavLink title="features"/>
                                    <div className="dot"/>
                                    <NavLink title="pricing"/>
                                </li>
                                <li className="nav-logo">
                                    <LinkScroll
                                        to="hero"
                                        offset={-100}
                                        spy
                                        smooth
                                        className={clsx('max-lg:hidden transition-transform duration-500 cursor-pinter')}
                                    >
                                        <img src="/images/UnpluggedWebWhiteText.svg" width={200} height={100} alt="logo"/>
                                    </LinkScroll>
                                </li>

                                <li className="nav-li">
                                    <NavLink title="faq"/>
                                    <div className="dot"/>
                                    <NavLink title="Join Us"/>
                                </li>
                            </ul>
                        </nav>
                        <div>
                            <></>
                        </div>
                    </div>
                </div>
                <button className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
                        onClick={()=>setIsOpen(prevState => !prevState)}>
                    <>{isOpen ? <FaTimes size={24} color="#5D9CEC" /> : <FaPlug size={24} color="#5D9CEC" />}</>
                </button>
            </div>
        </header>
    )
}
export default Header
