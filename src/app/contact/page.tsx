// src/app/contact/page.tsx
'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <div>
      <LanguageSwitcher />
      <h1>{t.title}</h1>
      <form>
        <div>
          <label>{t.name}</label>
          <input type="text" />
        </div>
        <div>
          <label>{t.email}</label>
          <input type="email" />
        </div>
        <div>
          <label>{t.message}</label>
          <textarea></textarea>
        </div>
        <button type="submit">{t.submit}</button>
      </form>
    </div>
  );
}

import DisplayLayout from "@/components/layout";
import { Input } from "antd";

export default function Home() {

  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <div>
      <DisplayLayout>
        <>
          <div className="bg-black h-[16rem] md:h-[20rem] w-full"></div>
          <div className="flex flex-col md:grid grid-cols-2 px-5 md:px-20 gap-10 md:gap-20 pt-14 md:pt-32 mb-32">
            <div className="flex">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl md:text-4xl mb-2 md:mb-3 font-black">{t.topic}</h4>
                  <p className="text-sm md:text-lg mb-7 md:mb-14 md:w-[90%] leading-loose md:leading-loose font-[500] md:font-normal">
                    {t.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <h5 className="text-sm md:text-base text-black mb-4 opacity-80">{t.emailAddress}</h5>
                      <h3 className="text-lg md:text-2xl font-medium">help@novatraders.com</h3>
                    </div>
                    <div></div>
                  </div>
                  <div className="mt-7 md:mt-20 flex flex-col md:flex-row md:items-center justify-between md:w-[85%]">
                    <div>
                      <h5 className="text-sm md:text-base text-black mb-4 opacity-80">{t.phone}</h5>
                      <h4 className="text-black text-lg md:text-xl font-medium">(+234) 807 199 8237</h4>
                    </div>
                    <div className="mt-7 md:mt-0">
                      <h5 className="text-black mb-4 text-sm md:text-base opacity-80">{t.location}</h5>
                      <h4 className="text-black text-lg md:text-xl font-medium">Lagos, Nigeria.</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <LanguageSwitcher /> */}
              <form action="">
                <div className="form-group w-full mb-5">
                  <label htmlFor="firstName" className="text-sm">{t.fullName}</label>
                  <Input className="border-2 border-solid border-[#F2F2F2] w-full rounded-lg py-5" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="form-group w-full mb-5">
                    <label htmlFor="firstName" className="text-sm">{t.emailAddress}</label>
                    <Input className="border-2 border-solid border-[#F2F2F2] w-full rounded-lg py-5" />
                  </div>
                  <div className="form-group w-full mb-5">
                    <label htmlFor="firstName" className="text-sm">{t.phone}</label>
                    <Input className="border-2 border-solid border-[#F2F2F2] w-full rounded-lg py-5" />
                  </div>
                </div>
                <div className="form-group w-full mb-5">
                  <label htmlFor="message" className="text-sm">{t.message}</label>
                  <textarea rows={5} className="text-sm p-2 w-full border-2 border-solid border-[#F2F2F2] rounded-lg"></textarea>
                </div>
                <div className="md:flex justify-between items-center">
                  <div>
                  </div>
                  <button className="text-sm md:text-base bg-primary text-black py-5 px-8 rounded-lg md:mt-5 text-base block">{t.title}</button>
                </div>
              </form>
            </div>
          </div>
        </>
      </DisplayLayout>
    </div>
  );
}
