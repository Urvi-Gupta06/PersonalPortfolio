import { SectionHeading, SubHeading } from "../templates/basicUIComponents";
import Typewriter from "typewriter-effect";
import config from "../config";

const Home = () => {
    return (
        <>
            <div className="p-8 mt-10 space-y-6 text-center justify-center items-center flex-grow align-middle">
                <div
                    className="w-full flex flex-row items-center justify-center gap-4 flex-wrap animate-fade-in-top opacity-0 [&.animate]:opacity-100"
                    data-animate-on-scroll
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold font-[Montserrat] tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700 dark:from-purple-300 dark:to-indigo-500">
                        YOUR
                    </h1>
                    <h1 className="text-5xl md:text-7xl font-extrabold font-[Montserrat] tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700 dark:from-purple-300 dark:to-indigo-500">
                        NAME
                    </h1>
                </div>
                <div className="text-2xl text-black font-bold mb-4 dark:text-white">
                    <Typewriter
                        options={{
                            strings: [
                                "AI/ML Enthusiast",
                                "Full Stack Developer",
                                "Hacker",
                                "Tech Innovator",
                                "Gamer at Heart",
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <SectionHeading text="UMass Amherst" />
                <SubHeading text={config.home.subHeading} />

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
                    <button
                        onClick={() => (window.location.href = "/#contact")}
                        className="bg-purple-600 flex px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300  dark:bg-purple-500 dark:hover:bg-purple-600 text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-zap mr-2 h-5 w-5"
                        >
                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                        </svg>
                        {config.home.buttonLabel}
                    </button>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300  dark:bg-purple-500 dark:hover:bg-purple-600 text-white"
                    >
                        <div className="flex items-center gap-2">
                            Resume
                            <svg
                                height="25px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12"
                                    stroke="#ffffff"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Home;
