import Link from "next/link";
import { RiFacebookCircleFill } from "react-icons/ri";
import { TbBrandInstagram } from "react-icons/tb";
import { BsLinkedin } from "react-icons/bs";


const Navigation = () => {
    return (
        <div>
            <div className="flex justify-between items-center px-5 md:px-20 py-5">
                <div>
                    <div className="flex gap-3 items-center">
                        <div className="h-14 w-20 bg-primary"></div>
                        <h4 className="font-bold text-xl">NovaApp</h4>
                    </div>
                </div>
                <div className="hidden md:block">
                    <ul className="flex gap-10">
                        <li>
                            <Link href="">Home</Link>
                        </li>
                        <li>
                            <Link href="">About Us</Link>
                        </li>
                        <li>
                            <Link href="">Shop</Link>
                        </li>
                        <li>
                            <Link href="">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:block">
                    <ul className="flex gap-10">
                        <ul className="flex gap-5 items-center">
                            <li>
                                <Link href="">
                                    <RiFacebookCircleFill className="text-2xl" />
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <TbBrandInstagram className="text-2xl" />
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <BsLinkedin className="text-2xl" />
                                </Link>
                            </li>
                        </ul>
                        <li>
                            <Link href="" className="bg-primary rounded-full py-5 px-10 text-center text-black font-medium">
                                Get a Quote
                            </Link>
                        </li>
                    </ul>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Navigation;