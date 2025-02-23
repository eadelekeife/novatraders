'use client';

import Image from "next/image";

import Big1 from "@/assets/images/big1.jpg";
import Big2 from "@/assets/images/big2.jpg";
import Big3 from "@/assets/images/big3.jpg";

import Sub1 from "@/assets/images/sub1.jpg";
import Sub2 from "@/assets/images/sub2.jpg";

import { BsArrowUpRightCircle } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import DisplayLayout from "@/components/layout";
import Link from "next/link";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

import { IoFilter } from "react-icons/io5";
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';

export default function Homepage() {
  const { language } = useLanguage();
  const t = translations[language].home;

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div>
          <p>Home</p>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div>
          <p>Food and Beverages</p>
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div>
          <p>Cereals and Oils</p>
        </div>
      )
    },
    {
      key: '4',
      label: (
        <div>
          <p>Honey</p>
        </div>
      )
    },
    {
      key: '5',
      label: (
        <div>
          <p>Construction Materials</p>
        </div>
      )
    },
    {
      key: '6',
      label: (
        <div>
          <p>Fruits and Berries</p>
        </div>
      )
    },
    {
      key: '7',
      label: (
        <div>
          <p>Vegetables</p>
        </div>
      )
    },
    {
      key: '8',
      label: (
        <div>
          <p>Meat</p>
        </div>
      )
    }
  ];

  return (
    <div>
      <DisplayLayout>
        <>
          <div className="hero h-[650px] md:h-screen bg-black flex items-cente px-5 md:px-20">
            <div className="md:w-[80%] flex items-center justify-center mx-auto text-center">
              <div>
                {/* <div className="px-7 py-3 mb-5 font-medium text-sm bg-white rounded-full w-max">See How We Impact</div> */}
                <h3 className="md:w-[80%] mx-auto text-white text-center text-4xl md:text-6xl font-medium leading-tight md:leading-tight mb-3 md:mb-5">{t.heroTitle}</h3>
                <p className="md:w-[60%] mx-auto text-sm md:text-lg mb-8 md:leading-loose leading-loose text-white">
                  {t.heroBody}
                </p>
                <Link href="/about" className="flex items-center gap-5 mx-auto text-sm md:text-base w-max bg-primary rounded-full py-1 px-2 pl-5 text-center text-black font-medium">
                  {t.heroButton}
                  <span className="size-14 bg-black rounded-full text-white flex items-center justify-center"><FaArrowRightLong className="text-xl" /></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="px-5 md:px-20 mt-24 mb-14">
            <div className="w-full">
              <div className="">
                {/* <div className="h-[12rem] md:h-[20rem] mb-14 rounded-3xl w-full bg-[#F1F1F1]"></div> */}
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl md:text-2xl font-bold">Our Products</h3>
                  <div className="">
                    <Link href="/products" className="text-black text-lg border-b-2 border-solid border-black">View More</Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 gap-y-10 md:gap-10">
                  <div className="">
                    <div className="h-[12rem] md:h-[18rem] w-full bg-[#F1F1F1]"></div>
                    <div className="mt-2 md:mt-5">
                      <h4 className="text-base md:text-lg font-medium">Osopiro Rice</h4>
                      <p className="mt-1 md:mt-3 text-black opacity-80">
                        <span className="text-sm uppercas">NGN</span>
                        <span className="text-sm md:text-lg">15,000.00</span>
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <div className="h-[12rem] md:h-[18rem] w-full bg-[#F1F1F1]"></div>
                    <div className="mt-2 md:mt-5">
                      <h4 className="text-base md:text-lg font-medium">Osopiro Rice</h4>
                      <p className="mt-1 md:mt-3 text-black opacity-80">
                        <span className="text-sm uppercas">NGN</span>
                        <span className="text-sm md:text-lg">15,000.00</span>
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <div className="h-[12rem] md:h-[18rem] w-full bg-[#F1F1F1]"></div>
                    <div className="mt-2 md:mt-5">
                      <h4 className="text-base md:text-lg font-medium">Osopiro Rice</h4>
                      <p className="mt-1 md:mt-3 text-black opacity-80">
                        <span className="text-sm uppercas">NGN</span>
                        <span className="text-sm md:text-lg">15,000.00</span>
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <div className="h-[12rem] md:h-[18rem] w-full bg-[#F1F1F1]"></div>
                    <div className="mt-2 md:mt-5">
                      <h4 className="text-base md:text-lg font-medium">Osopiro Rice</h4>
                      <p className="mt-1 md:mt-3 text-black opacity-80">
                        <span className="text-sm uppercas">NGN</span>
                        <span className="text-sm md:text-lg">15,000.00</span>
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <div className="h-[12rem] md:h-[18rem] w-full bg-[#F1F1F1]"></div>
                    <div className="mt-2 md:mt-5">
                      <h4 className="text-base md:text-lg font-medium">Osopiro Rice</h4>
                      <p className="mt-1 md:mt-3 text-black opacity-80">
                        <span className="text-sm uppercas">NGN</span>
                        <span className="text-sm md:text-lg">15,000.00</span>
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <div className="h-[12rem] md:h-[18rem] w-full bg-[#F1F1F1]"></div>
                    <div className="mt-2 md:mt-5">
                      <h4 className="text-base md:text-lg font-medium">Osopiro Rice</h4>
                      <p className="mt-1 md:mt-3 text-black opacity-80">
                        <span className="text-sm uppercas">NGN</span>
                        <span className="text-sm md:text-lg">15,000.00</span>
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <div className="h-[12rem] md:h-[18rem] w-full bg-[#F1F1F1]"></div>
                    <div className="mt-2 md:mt-5">
                      <h4 className="text-base md:text-lg font-medium">Osopiro Rice</h4>
                      <p className="mt-1 md:mt-3 text-black opacity-80">
                        <span className="text-sm uppercas">NGN</span>
                        <span className="text-sm md:text-lg">15,000.00</span>
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <div className="h-[12rem] md:h-[18rem] w-full bg-[#F1F1F1]"></div>
                    <div className="mt-2 md:mt-5">
                      <h4 className="text-base md:text-lg font-medium">Osopiro Rice</h4>
                      <p className="mt-1 md:mt-3 text-black opacity-80">
                        <span className="text-sm uppercas">NGN</span>
                        <span className="text-sm md:text-lg">15,000.00</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col md:grid grid-cols-1/2 mt-14 gap-5 md:gap-20 items-start">
              <div className="hidden md:flex gap-2 items-center">
                <div className="size-2 bg-black rounded-full"></div>
                <p className="w-full md:leading-relaxed leading-relaxed text-base md:text-xl">{t.belowTitle}?</p>
              </div>
              <div>
                <h4 className="w-[80%] md:w-full text-xl md:text-4xl md:w-[50%] mb-2 md:mb-4 leading-normal md:leading-normal font-bold">
                  {t.belowBody}
                </h4>
                <p className="text-sm md:text-lg md:leading-loose leading-loose">
                  {t.belowTag}
                </p>
                <Link href="" className="hidden md:flex mt-10 flex items-center gap-5 text-sm md:text-base w-max bg-primary rounded-full py-1 px-2 pl-5 text-center text-black font-medium">
                  {t.belowButton}
                  <span className="size-14 bg-black rounded-full text-white flex items-center justify-center"><FaArrowRightLong className="text-xl" /></span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col md:grid grid-cols-1/2 mt-7 md:mt-14 gap-5 md:gap-10 items-start">
              <Image src={Sub1} alt="nkwn" className="h-[20rem] md:h-[25rem] rounded-2xl object-fit object-cover" />
              <Image src={Sub2} alt="nkwn" className="hidden md:block h-[20rem] md:h-[25rem] rounded-2xl object-fit object-cover" />
            </div> */}
          </div>
          <div className="bg-black mt-20 md:mt-32 px-5 md:px-20 py-20 md:py-32">
            <div className="md:w-[75%]">
              <div className="px-7 md:px-5 py-3 mb-5 font-medium text-sm bg-primary rounded-full w-max md:mx-0">{t.blackTag}</div>
              <h3 className="text-white text-2xl md:text-5xl font-medium leading-snug md:leading-snug mb-5">{t.blackTitle}</h3>
              <p className="md:w-[90%] text-sm md:text-lg md:leading-loose leading-loose text-white opacity-80">
                {t.blackStory}
              </p>
            </div>
            <div className="mt-10 md:mt-20 flex flex-col md:grid grid-cols-3 gap-10">
              <div>
                {/* <div className="h-[20rem] md:h-[25rem] bg-white opacity-60 mb-5"></div> */}
                <Image src={Big1} alt="nkwn" className="h-[20rem] md:h-[25rem] mb-5 object-fit object-cover rounded-2xl" />
                <p className="text-white opacity-80 mb-2">Our Story</p>
                <h4 className="text-xl md:text-2xl text-white mb-2 font-medium">How We Impact</h4>
                <p className="text-white opacity-80 leading-loose md:leading-loose text-sm">
                  Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact.
                </p>
                <button className="mt-5 rounded-full bg-white text-sm py-4 px-8 flex items-center gap-3">View More <BsArrowUpRightCircle className="text-xl" /></button>
              </div>
              <div>
                <Image src={Big2} alt="nkwn" className="h-[20rem] md:h-[25rem] mb-5 object-fit object-cover rounded-2xl" />
                <p className="text-white opacity-80 mb-2">Our Story</p>
                <h4 className="text-xl md:text-2xl text-white mb-2 font-medium">How We Impact</h4>
                <p className="text-white opacity-80 leading-loose md:leading-loose text-sm">
                  Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact.
                </p>
                <button className="mt-5 rounded-full bg-white text-sm py-4 px-8 flex items-center gap-3">View More <BsArrowUpRightCircle className="text-xl" /></button>
              </div>
              <div>
                <Image src={Big3} alt="nkwn" className="h-[20rem] md:h-[25rem] mb-5 object-fit object-cover rounded-2xl" />
                <p className="text-white opacity-80 mb-2">Our Story</p>
                <h4 className="text-xl md:text-2xl text-white mb-2 font-medium">How We Impact</h4>
                <p className="text-white opacity-80 leading-loose md:leading-loose text-sm">
                  Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact.
                </p>
                <button className="mt-5 rounded-full bg-white text-sm py-4 px-8 flex items-center gap-3">View More <BsArrowUpRightCircle className="text-xl" /></button>
              </div>
            </div>
          </div>
          <div className="text-center md:text-left mb-32 mt-20 md:mt-32 px-5 md:px-20 flex flex-col-reverse md:grid md:gap-14 grid-cols-2">
            <div>
              <div>
                <h3 className="text-2xl md:text-5xl md:w-[90%] font-bold mb-3 md:leading-tight leading-tight capitalise">{t.bottomTitle}</h3>
                <p className="text-sm md:text-base md:leading-loose leading-loose">
                  {t.bottomStory}
                </p>
                <div className="mt-12 flex flex-col md:grid grid-cols-2 gap-10">
                  <div>
                    <div className="size-20 mx-auto md:mx-0 mb-4 rounded-full bg-[#CFF34E]"></div>
                    <h4 className="text-3xl font-worksans font-medium mb-2">50%</h4>
                    <p className="font-[500] md:font-normal text-sm md:leading-loose leading-loose">
                      Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact.
                    </p>
                  </div>
                  <div>
                    <div className="size-20 mx-auto md:mx-0 mb-4 rounded-full bg-[#CFF34E]"></div>
                    <h4 className="text-3xl font-worksans font-medium mb-2">50%</h4>
                    <p className="font-[500] md:font-normal text-sm md:leading-loose leading-loose">
                      Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-full br-img"></div>
          </div>
        </>
      </DisplayLayout>
    </div>
  );
}
