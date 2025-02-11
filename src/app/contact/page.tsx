import DisplayLayout from "@/components/layout";
import { Input } from "antd";

export default function Home() {
    return (
        <div>
            <DisplayLayout>
                <>
                    <div className="bg-black h-[20rem] w-full"></div>
                    <div className="flex flex-col md:grid grid-cols-2 px-5 md:px-20 gap-20 pt-32">
                        <div className="flex">
                            <div className="h-full flex flex-col justify-between">
                                <div>
                                    <h4 className="text-3xl md:text-5xl mb-4 md:mb-8 font-black">Get in touch</h4>
                                    <p className="text-base md:text-lg mb-14 w-[90%]">
                                        Get in touch to learn more about how I can help you turn data into meaningful insights. Let's work together to unlock the potential of your data and drive better decisions.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h5 className="text-black mb-4 opacity-80">Email address</h5>
                                            <h3 className="text-2xl font-medium">help@novatraders.com</h3>
                                        </div>
                                        <div></div>
                                    </div>
                                    <div className="mt-10 md:mt-20 flex flex-col md:flex-row md:items-center justify-between md:w-[85%]">
                                        <div>
                                            <h5 className="text-black mb-4 text-base opacity-80">My Phone Number</h5>
                                            <h4 className="text-black text-xl">(+234) 807 199 8237</h4>
                                        </div>
                                        <div className="mt-10 md:mt-0">
                                            <h5 className="text-black mb-4 text-base opacity-80">Location</h5>
                                            <h4 className="text-black text-xl">Abeokuta, Nigeria.</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form action="">
                                <div className="form-group w-full mb-5">
                                    <label htmlFor="firstName" className="text-base">Full name</label>
                                    <Input className="w-full py-5" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="form-group w-full mb-5">
                                        <label htmlFor="firstName" className="text-sm">Email address</label>
                                        <Input className="w-full py-5" />
                                    </div>
                                    <div className="form-group w-full mb-5">
                                        <label htmlFor="firstName" className="text-sm">Phone number</label>
                                        <Input className="w-full py-5" />
                                    </div>
                                </div>
                                <div className="form-group w-full mb-5">
                                    <label htmlFor="firstName" className="text-sm">Email address</label>
                                    <Input className="w-full h-[10rem]" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                    </div>
                                    <button className="bg-primary text-black py-5 px-8 rounded-lg mt-5 text-base block">Reach out to us</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            </DisplayLayout>
        </div>
    );
}
