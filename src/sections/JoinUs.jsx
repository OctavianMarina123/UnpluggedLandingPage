import { Element } from "react-scroll";
import { useState } from "react";
import Button from "../components/Button.jsx";
import emailjs from '@emailjs/browser';

const JoinUs = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await emailjs.send(
                "service_6cegakb",
                "template_1xjlrsc",
                {
                    from_email: email,
                    to_email: 'octamarina@gmail.com',
                    message: `A new user has joined the early access with the email: ${email}`
                },
                'P8iA8E5QTdCrLN1um'
            );
            setSubmitted(true);

            console.log("Submitted email: ", email);
        } catch (error) {
            console.error("Failed to send email", error);
            alert("Failed to send the email. Please try again later.");
        }
    };

    return (
        <section>
            <Element
                name="Join Us"
                className="g7 relative pb-60 pt-48 max-lg:pb-48 max-md:py-32 bg-gradient-to-r from-s2/25 to-s1/25"
            >
                <div className="container">
                    <div className="max-w-960 mx-auto text-center">
                        <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-20 max-w-xl text-center text-p4 max-md:mb-16 max-sm:max-w-sm">
                            Join Our Early Access!
                        </h3>
                        <p className="body-1 mb-16 max-w-lg mx-auto text-xl text-gray-600">
                            Be the first to know when we launch! Enter your email below to join our Early Premium plan and receive free access.
                        </p>

                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="mx-auto max-w-lg">
                                <div className="relative mb-12">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        className="w-full rounded-full border-2 border-s4/25 bg-s1/50 px-8 py-6 text-base text-s3 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-s4"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <Button type="submit" className="px-12 py-4 text-xl">
                                    Join Early Access
                                </Button>
                            </form>
                        ) : (
                            <div className="mt-12">
                                <h4 className="h4 text-p4 mb-8">Thank You!</h4>
                                <p className="body-2 text-gray-500 text-lg">
                                    You've successfully joined our Early Access list. We'll notify you when the app is launched!
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute inset-0 flex justify-center pointer-events-none">
                        <div className="h-[450px] w-full max-w-3xl bg-gradient-to-r from-s3/25 to-transparent rounded-full opacity-60 blur-2xl transform -translate-y-32"></div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default JoinUs;