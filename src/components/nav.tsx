"use client";

import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Drawer, Input, Modal } from "antd";
import { FaTimes } from "react-icons/fa";
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import USImg from "@/assets/images/logo/us.png";
import FrImg from "@/assets/images/logo/fr.png";
import ArImg from "@/assets/images/logo/ar.png";
import RuImg from "@/assets/images/logo/ru.png";
import Logo from "@/assets/images/lolo.png";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navigation = () => {

    const { setLanguage } = useLanguage();
    const [, setFixed] = useState(false);
    const [currentCountry, setCurrentCountry] = useState("en");
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const toggleDisplayDrawer = () => setOpenDrawer(!openDrawer);
    const toggleMenuDisplay = () => setOpenMenu(!openMenu);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setFixed(true);
            }
            else {
                setFixed(false);
            }
        })
    }, [])

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div onClick={() => {
                    setLanguage('en')
                    setCurrentCountry("en")
                }}>
                    <Image src={USImg} alt="us logo" className="w-auto h-[20px]" />
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div onClick={() => {
                    setLanguage('fr')
                    setCurrentCountry("fr")
                }}>
                    <Image src={FrImg} alt="france logo" className="w-auto h-[20px]" />
                </div>
            ),
        },
        {
            key: '3',
            label: (
                <div onClick={() => {
                    setLanguage('ar')
                    setCurrentCountry("ar")
                }}>
                    <Image src={ArImg} alt="arabic logo" className="w-auto h-[20px]" />
                </div>
            )
        },
        {
            key: '4',
            label: (
                <div onClick={() => {
                    setLanguage('ru')
                    setCurrentCountry("ru")
                }}>
                    <Image src={RuImg} alt="russia logo" className="w-auto h-[20px]" />
                </div>
            )
        }
    ];

    return (
        <div>
            <div className="nav fixed top-0 z-40 w-full md:pt-8">
                <div className={`flex justify-between items-center md:md:w-[60%] md:rounded-full mx-auto px-5 md:px-2 py-3 z-40 bg-black`}>
                    <div>
                        <Link href="/">
                            <div className="flex gap-3 items-center">
                                <Image src={Logo} alt="logo" className="w-auto h-[50px]" />
                            </div>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex gap-10 items-center cursor-pointer">
                            <li>
                                <Link className={`text-sm opacity-70 text-white `} href="/">Home</Link>
                            </li>
                            <li>
                                <Link className={`text-sm opacity-70 text-white `} href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link className={`text-sm opacity-70 text-white `} href="/products">Our Products</Link>
                            </li>
                            <li>
                                <Link className={`text-sm opacity-70 text-white `} href="contact">Contact Us</Link>
                            </li>
                            <li className="pt-2">
                                <Dropdown menu={{ items }}>
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            {
                                                currentCountry === "en" ?
                                                    <Image src={USImg} alt="USImg" className="w-auto h-[20px]" />
                                                    : currentCountry === "ru" ?
                                                        <Image src={RuImg} alt="USImg" className="w-auto h-[20px]" />
                                                        : currentCountry === "ar" ?
                                                            <Image src={ArImg} alt="USImg" className="w-auto h-[20px]" />
                                                            :
                                                            <Image src={FrImg} alt="USImg" className="w-auto h-[20px]" />
                                            }
                                        </Space>
                                    </a>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex gap-2">
                            <li>
                                <Link href="#" onClick={toggleMenuDisplay} className="bg-primary rounded-full py-5 px-10 text-center text-black font-medium">
                                    Get a Quote
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex gap-2 items-center md:hidden">
                        <div>
                            <Dropdown menu={{ items }}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <div className="flex items-center pt-2">
                                            {
                                                currentCountry === "en" ?
                                                    <Image src={USImg} alt="USImg" className="w-auto h-[20px]" />
                                                    : currentCountry === "ru" ?
                                                        <Image src={RuImg} alt="USImg" className="w-auto h-[20px]" />
                                                        : currentCountry === "ar" ?
                                                            <Image src={ArImg} alt="USImg" className="w-auto h-[20px]" />
                                                            :
                                                            <Image src={FrImg} alt="USImg" className="w-auto h-[20px]" />
                                            }
                                            <MdKeyboardArrowDown className="text-2xl text-white" />
                                        </div>
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                        <div onClick={toggleDisplayDrawer}>
                            <HiMenuAlt3 className={`text-3xl text-white`} />
                        </div>
                    </ul>
                    <Modal open={openMenu} onClose={toggleMenuDisplay} onCancel={toggleMenuDisplay} footer={null}>
                        <h4 className="text-xl md:text-2xl mb-10 font-bold text-center">Get a Free Quote</h4>
                        <div className="grid grid-cols-2 gap-5 mb-5 items-center">
                            <div className="form-group">
                                <label htmlFor="">First name</label>
                                <Input className="border-2 border-solid border-[#F2F2F2] w-full rounded-lg py-5" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Last name</label>
                                <Input className="border-2 border-solid border-[#F2F2F2] w-full rounded-lg py-5" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 mb-5 items-center">
                            <div className="form-group">
                                <label htmlFor="">Business Email</label>
                                <Input className="border-2 border-solid border-[#F2F2F2] w-full rounded-lg py-5" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Business Phone</label>
                                <Input className="border-2 border-solid border-[#F2F2F2] w-full rounded-lg py-5" />
                            </div>
                        </div>
                        <div className="form-group mb-5">
                            <label htmlFor="">Business name</label>
                            <Input className="border-2 border-solid border-[#F2F2F2] w-full rounded-lg py-5" />
                        </div>
                        <div>
                            <button onClick={toggleMenuDisplay} className="w-max px-20 py-5 mt-10 bg-primary rounded-xl mx-auto block">Get Quote</button>
                        </div>
                    </Modal>
                    <Drawer open={openDrawer} onClose={toggleDisplayDrawer}>
                        <div className="relative h-full">
                            <div className="pb-2 py-5 px-4 flex items-center justify-between">
                                <Link href="/">
                                    {/* <Image src={Logo} alt="logo" className="w-auto h-[50px]" /> */}
                                    {/* <div className="flex gap-3 items-center">
                                        <div className="h-10 md:h-14 w-16 md:w-20 bg-primary"></div>
                                        <h4 className={`font-bold text-xl text-black`}>NovaApp</h4>
                                    </div> */}
                                </Link>
                                <FaTimes onClick={toggleDisplayDrawer} className="text-[#FF0000] text-3xl" />
                            </div>
                            <ul className="flex flex-col w-full gap-0">
                                <li onClick={toggleDisplayDrawer}
                                    className="text-sm font-medium text-black font-worksans border-b border-solid border-[#F2F2F2] px-4 py-5">
                                    <Link href="/">Home</Link></li>
                                <li onClick={toggleDisplayDrawer}
                                    className="text-sm font-medium text-black font-worksans border-b border-solid border-[#F2F2F2] px-4 py-5">
                                    <Link href="/about">About Us</Link></li>
                                <li onClick={toggleDisplayDrawer}
                                    className="text-sm font-medium text-black font-worksans border-b border-solid border-[#F2F2F2] px-4 py-5">
                                    <Link href="/products">Our Products</Link></li>
                                <li onClick={toggleDisplayDrawer}
                                    className="text-sm font-medium text-black font-worksans border-b border-solid border-[#F2F2F2] px-4 py-5">
                                    <Link href="/contact"> Contact Us</Link></li>
                                <li onClick={() => {
                                    toggleDisplayDrawer();
                                    toggleMenuDisplay();
                                }}
                                    className="text-sm font-medium text-black font-worksans border-b border-solid border-[#F2F2F2] px-4 py-5">
                                    <Link href="#">Get a Quote</Link></li>
                                <li onClick={() => {
                                    toggleDisplayDrawer();
                                }}
                                    className="text-sm font-medium text-black font-worksans border-b border-solid border-[#F2F2F2] px-4 py-5">
                                    <a target="_blank"
                                        href="https://wa.me/+380936018625?text=Hello%20there,%20I%20want%20to%20make%20enquiries"> Chat on Whatsapp</a></li>
                            </ul>
                            <div className="absolute bottom-20 w-full">
                                <div className="flex items-center w-max mx-auto border-2 border-solid border-black px-10 pb-2 pt-3">
                                    <Dropdown menu={{ items }}>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <div className="flex items-center">
                                                    {
                                                        currentCountry === "en" ?
                                                            <Image src={USImg} alt="USImg" className="w-auto h-[20px]" />
                                                            : currentCountry === "ru" ?
                                                                <Image src={RuImg} alt="USImg" className="w-auto h-[20px]" />
                                                                : currentCountry === "ar" ?
                                                                    <Image src={ArImg} alt="USImg" className="w-auto h-[20px]" />
                                                                    :
                                                                    <Image src={FrImg} alt="USImg" className="w-auto h-[20px]" />
                                                    }
                                                    <MdKeyboardArrowDown className="text-2xl" />
                                                </div>
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </div>
                            </div>
                        </div >
                    </Drawer>
                </div>
            </div>
        </div>
    )
}

export default Navigation;