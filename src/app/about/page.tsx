'use client';

import DisplayLayout from "@/components/layout";

import AboutImg from "@/assets/images/about.jpg";
import Image from "next/image";
// import { useLanguage } from "@/context/LanguageContext";
// import { translations } from "@/translations";

export default function Home() {
    // const { language } = useLanguage();
    // const t = translations[language].about;
    return (
        <div>
            <DisplayLayout>
                <>
                    <div className="bg-black h-[16rem] md:h-[20rem] w-full"></div>
                    <div className="pt-20 md:pt-28 mb-32">
                        <div className="px-5 md:px-0 md:w-[50%] mx-auto">
                            <h4 className="text-xl md:text-2xl mb-5 font-bold leading-relaxed md:leading-relaxed">
                                The Sill was founded on this simple premise—plants make us happier, healthier humans.
                            </h4>
                            <div className="w-full">
                                <Image src={AboutImg} alt="pay for it" className="h-[16rem] md:h-[24rem] object-fit object-cover rounded-lg" />
                            </div>
                            <div className="mt-6 md:mt-12 flex flex-col gap-7">
                                <p className="text-base leading-loose">
                                    NovaTradar is a pioneering agricultural platform dedicated to transforming the way farmers and businesses connect. Our journey began with a commitment to bridging the gap between farmers and companies, fostering growth, efficiency, and a more sustainable agricultural ecosystem.
                                </p>

                                <p className="leading-loose">
                                    NovaTradar is a pioneering agricultural platform dedicated to transforming the way farmers and businesses connect. Our journey began with a commitment to bridging the gap between farmers and companies, fostering growth, efficiency, and a more sustainable agricultural ecosystem.
                                </p>

                                <p className="leading-loose">
                                    NovaTradar is a pioneering agricultural platform dedicated to transforming the way farmers and businesses connect. Our journey began with a commitment to bridging the gap between farmers and companies, fostering growth, efficiency, and a more sustainable agricultural ecosystem.
                                </p>

                                <p className="leading-loose">
                                    NovaTradar is a pioneering agricultural platform dedicated to transforming the way farmers and businesses connect. Our journey began with a commitment to bridging the gap between farmers and companies, fostering growth, efficiency, and a more sustainable agricultural ecosystem.
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            </DisplayLayout>
        </div>
    );
}
