import Image from "next/image";

export default function BigBite() {
    return (
        <section className="py-12 bg-[#92400EB5] relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4 sm:mb-6">“Big Bite on TV”</h2>
                <p className="max-w-2xl mx-auto mb-8 sm:mb-12 text-[#6b4a38] text-sm sm:text-base">
                    From a small home kitchen to national recognition on Sharks Tank – discover
                    the incredible journey that transformed our passion for cheesecakes into a
                    thriving business that touches hearts across the country.
                </p>

                <div className="relative flex justify-center">
                    {/* Tree branch */}
                    <svg
                        className="absolute top-0 left-0 w-full h-[150px] sm:h-[200px] md:h-[250px] pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M 10 40 Q 200 10, 600 40 Q 1000 70, 1200 40"
                            stroke="#4a3528"
                            strokeWidth="8"
                            fill="transparent"
                            strokeLinecap="round"
                        />
                    </svg>

                    {/* Polaroids */}
                    <div className="relative flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 mt-24 sm:mt-32 md:mt-40">

                        {/* Polaroid 1 */}
                        <div className="flex flex-col items-center bg-[#fff8f0] p-2 rounded-lg shadow-lg transform -rotate-6 relative w-[150px] sm:w-[180px] md:w-[220px]">
                            <svg className="absolute -top-28 sm:-top-32 md:-top-40 left-0 w-full h-28 sm:h-32 md:h-40" xmlns="http://www.w3.org/2000/svg">
                                <line x1="50%" y1="0" x2="0" y2="100%" stroke="#6b4a38" strokeWidth="3" />
                                <line x1="50%" y1="0" x2="100%" y2="100%" stroke="#6b4a38" strokeWidth="3" />
                            </svg>
                            <Image
                                src="/3.png"
                                alt="tv"
                                width={220}
                                height={220}
                                className="w-full h-auto object-cover"
                            />
                            <div className="mt-2 bg-[url('/captionText.png')] bg-cover bg-center text-[#92400E] px-3 py-1 rounded-md text-xs sm:text-sm font-medium">
                                Behind Shark Tank
                            </div>
                        </div>

                        {/* Polaroid 2 */}
                        <div className="flex flex-col items-center bg-[#fff8f0] p-2 rounded-lg shadow-lg transform rotate-2 relative w-[150px] sm:w-[180px] md:w-[220px]">
                            <svg className="absolute -top-28 sm:-top-32 md:-top-40 left-0 w-full h-28 sm:h-32 md:h-40" xmlns="http://www.w3.org/2000/svg">
                                <line x1="50%" y1="0" x2="0" y2="100%" stroke="#6b4a38" strokeWidth="3" />
                                <line x1="50%" y1="0" x2="100%" y2="100%" stroke="#6b4a38" strokeWidth="3" />
                            </svg>
                            <Image
                                src="/2.png"
                                alt="tv"
                                width={220}
                                height={220}
                                className="w-full h-auto object-cover"
                            />
                            <div className="mt-2 bg-[url('/captionText.png')] bg-cover bg-center text-[#92400E] px-3 py-1 rounded-md text-xs sm:text-sm font-medium">
                                On Stage
                            </div>
                        </div>

                        {/* Polaroid 3 (straight) */}
                        <div className="flex flex-col items-center bg-[#fff8f0] p-2 rounded-lg shadow-lg relative w-[150px] sm:w-[180px] md:w-[220px]">
                            <svg className="absolute -top-28 sm:-top-32 md:-top-40 left-0 w-full h-28 sm:h-32 md:h-40" xmlns="http://www.w3.org/2000/svg">
                                <line x1="50%" y1="0" x2="0" y2="100%" stroke="#6b4a38" strokeWidth="3" />
                                <line x1="50%" y1="0" x2="100%" y2="100%" stroke="#6b4a38" strokeWidth="3" />
                            </svg>
                            <Image
                                src="/1.png"
                                alt="tv"
                                width={220}
                                height={220}
                                className="w-full h-auto object-cover"
                            />
                            <div className="mt-2 bg-[url('/captionText.png')] bg-cover bg-center text-[#92400E] px-3 py-1 rounded-md text-xs sm:text-sm font-medium">
                                After the Show
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
