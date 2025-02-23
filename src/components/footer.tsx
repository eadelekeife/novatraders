import Link from "next/link";

import Logo from "@/assets/images/lolo.png";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const Footer = () => {

    const { language } = useLanguage();
    const t = translations[language].nav;

    return (
        <div>
            <div className="px-5 md:px-20 pt-20 pb-10 bg-[#0B1416]">
                <div className="flex flex-col md:flex-row gap-10 md:gap-0 flex justify-between">
                    <div>
                        <Image src={Logo} alt="logo" className="w-auto h-[50px] mb-10" />
                        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                            <div>
                                <h5 className="text-sm md:text-base text-white mb-2 md:mb-4">{t.emailAddress}</h5>
                                <a className="text-white text-lg md:text-2xl" href="mailTo:help@novatradar.com" target="_blank">help@novatradar.com</a>
                            </div>
                            <div>
                                <h5 className="text-sm md:text-base text-white mb-2 md:mb-4">{t.phone}</h5>
                                <a className="text-white text-lg md:text-2xl" href="mailTo:+380936018625" target="_blank">(+380) 936 01 8625</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-40 text-white">
                        <div>
                            <h5 className="mb-5 text-base tracking-wide font-bold">{t.company}</h5>
                            <ul className="flex flex-col gap-5">
                                <li>
                                    <Link href="" className="text-sm opacity-80">{t.home}</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-sm opacity-80">{t.about}</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-sm opacity-80">{t.products}</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-sm opacity-80">{t.contact}</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="mb-5 text-base tracking-wide font-bold">Shop</h5>
                            <ul className="flex flex-col gap-5">
                                <li>
                                    <Link href="" className="text-sm opacity-80">Home</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-sm opacity-80">About Us</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-sm opacity-80">Shop</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-sm opacity-80">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border border border-white opacity-20 mt-16"></div>
                <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between md:items-center mt-14">
                    <div>
                        <p className="text-white text-sm opacity-80">
                            &copy; {new Date().getFullYear()} &mdash; {t.copyright}
                        </p>
                    </div>
                    <div>
                        <ul className="flex gap-20 md:gap-10">
                            <li>
                                <Link href="" className="text-sm text-white opacity-80">Privacy Policies</Link>
                            </li>
                            <li>
                                <Link href="" className="text-sm text-white opacity-80">Terms of Use</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="flex flex-col md:grid grid-cols-2 gap-10 text-white">
                    <div>
                        <div>
                            <h4 className="mb-5 text-2xl font-bold">Novatraders</h4>
                            <p className="md:w-[70%] leading-relaxed md:leading-relaxed">
                                Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                            <div>
                                <h5 className="mb-5 text-base tracking-wide font-bold">Company</h5>
                                <ul className="flex flex-col gap-5">
                                    <li>
                                        <Link href="" className="text-sm opacity-80">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="" className="text-sm opacity-80">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="" className="text-sm opacity-80">Shop</Link>
                                    </li>
                                    <li>
                                        <Link href="" className="text-sm opacity-80">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="mb-5 text-base tracking-wide font-bold">Shop</h5>
                                <ul className="flex flex-col gap-5">
                                    <li>
                                        <Link href="" className="text-sm opacity-80">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="" className="text-sm opacity-80">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="" className="text-sm opacity-80">Shop</Link>
                                    </li>
                                    <li>
                                        <Link href="" className="text-sm opacity-80">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="mb-5 text-base tracking-wide font-bold">Reach out to us</h5>
                                <div className="flex gap-5 flex-col">
                                    <div className="flex gap-5">
                                        <BsFacebook className="text-lg" />
                                        <BsInstagram className="text-lg" />
                                        <BsTwitterX className="text-lg" />
                                        <GrLinkedin className="text-lg" />
                                    </div>
                                    <div>
                                        <ul className="">
                                            <li>
                                                <Link href="" className="text-sm opacity-80">0813 227 7316</Link>
                                            </li>
                                            <li>
                                                <Link href="" className="text-sm opacity-80">eadelekeife@gmail.com</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-20">
                    <div>
                        <p className="text-white text-sm opacity-80">
                            &copy; {new Date().getFullYear()} &mdash; Copyright Novatradar
                        </p>
                    </div>
                    <div>
                        <ul className="flex gap-10">
                            <li>
                                <Link href="" className="text-sm text-white opacity-80">Privacy Policies</Link>
                            </li>
                            <li>
                                <Link href="" className="text-sm text-white opacity-80">Terms of Use</Link>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Footer;