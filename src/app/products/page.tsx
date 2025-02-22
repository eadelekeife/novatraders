import DisplayLayout from "@/components/layout";
import { IoFilter } from "react-icons/io5";
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';

export default function Home() {

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
                    <div className="bg-black h-[16rem] md:h-[20rem] w-full"></div>
                    <div className="w-full flex flex-col md:grid grid-cols-1/3 px-5 md:px-20 pt-20 md:pt-32 pb-32">
                        <div className="hidden md:block">
                            <h5 className="mb-6 tracking-wide text-lg font-bold">Filter:</h5>
                            <ul className="flex flex-col gap-6">
                                <li className="text-base">All</li>
                                <li className="text-base">Food and Beverages</li>
                                <li className="text-base">Cereals and Oils</li>
                                <li className="text-base">Honey</li>
                                <li className="text-base">Construction Materials</li>
                                <li className="text-base">Fruits and Berries</li>
                                <li className="text-base">Vegetables</li>
                                <li className="text-base">Dairy</li>
                                <li className="text-base">Meat</li>
                            </ul>
                        </div>
                        <div className="">
                            {/* <div className="h-[12rem] md:h-[20rem] mb-14 rounded-3xl w-full bg-[#F1F1F1]"></div> */}
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl md:text-2xl font-bold">Recent Products</h3>
                                <div className="block md:hidden">
                                    <Dropdown menu={{ items }}>
                                        <IoFilter className="text-3xl" />
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 gap-y-10 md:gap-10">
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
                </>
            </DisplayLayout>
        </div >
    );
}
