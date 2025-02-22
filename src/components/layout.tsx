import React from "react";
import Footer from "./footer";
import Navigation from "./nav";

import { TbBrandWhatsapp } from "react-icons/tb";

interface DisplayInterface {
    children: React.ReactElement
}

const DisplayLayout = (props: DisplayInterface) => {
    return (
        <>
            <Navigation />
            <div className="relative">
                <div className="fixed bottom-32 right-5 md:right-10 z-50">
                    <div className="size-14 md:size-20 border-2 border-solid bg-[#CFF34E] border-[#CFF34E] rounded-full flex items-center justify-center">
                        <TbBrandWhatsapp className="text-2xl md:text-4xl" />
                    </div>
                </div>
                {props.children}
            </div>
            <Footer />
        </>
    )
}

export default DisplayLayout;