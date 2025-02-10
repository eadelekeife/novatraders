import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
    return (
        <div>
            <div className="px-20 py-20">
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <div>
                            <h4 className="mb-5 text-2xl font-bold">Novatraders</h4>
                            <p className="md:w-[70%] leading-relaxed md:leading-relaxed">
                                Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-3 gap-10">
                            <div>
                                <h5 className="mb-5 text-base tracking-wide font-bold">Company</h5>
                                <ul className="flex flex-col gap-3">
                                    <li>
                                        <Link href="" className="text-sm">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="" className="text-sm">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="" className="text-sm">Shop</Link>
                                    </li>
                                    <li>
                                        <Link href="" className="text-sm">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="mb-5 text-base tracking-wide font-bold">Company</h5>
                                <ul className="flex flex-col gap-3">
                                    <li>
                                        <Link href="" className="text-sm">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="" className="text-sm">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="" className="text-sm">Shop</Link>
                                    </li>
                                    <li>
                                        <Link href="" className="text-sm">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="mb-5 text-base tracking-wide font-bold">Reach out to us</h5>
                                <div className="flex gap-3 flex-col">
                                    <div className="flex gap-5">
                                        <BsFacebook className="text-lg" />
                                        <BsInstagram className="text-lg" />
                                        <BsTwitterX className="text-lg" />
                                        <GrLinkedin className="text-lg" />
                                    </div>
                                    <div>
                                        <ul className="">
                                            <li>
                                                <Link href="" className="text-sm">0813 227 7316</Link>
                                            </li>
                                            <li>
                                                <Link href="" className="text-sm">eadelekeife@gmail.com</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-20">
                    <div>
                        &copy; {new Date().getFullYear()} &mdash; Copyright
                    </div>
                    <div>
                        <ul className="flex gap-10">
                            <li>
                                <Link href="">Privacy Policies</Link>
                            </li>
                            <li>
                                <Link href="">Terms of Use</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;