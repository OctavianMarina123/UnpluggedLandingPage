import React, {useEffect} from 'react'
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Footer from "./sections/Footer.jsx";
import Faq from "./sections/Faq.jsx";
import JoinUs from "./sections/JoinUs.jsx";

const App = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="overflow-hidden">
            <Header/>
            <Hero/>
            <Features/>
            <Pricing/>
            <Faq/>
            <JoinUs/>
            <Footer/>
        </main>
    )
}
export default App
