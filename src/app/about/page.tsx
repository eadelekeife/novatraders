import DisplayLayout from "@/components/layout";


export default function Home() {
    return (
        <div>
            <DisplayLayout>
                <>
                    <div className="bg-black h-[20rem] w-full"></div>
                    <div className="px-5 md:px-20 pt-20 pb-16 md:py-32">
                        <div className="md:w-[70rem] mx-auto">
                            <h3 className="text-3xl md:text-5xl font-bold text-center mb-5 md:w-[70%] mx-auto leading-normal">
                                Improving Farming With Innovative Ideas For The Future.
                            </h3>
                            <div className="h-[15rem] md:h-[30rem] w-full rounded-3xl bg-black"></div>
                            <div className="mt-10">
                                <div className="flex flex-col md:grid grid-cols-2 gap-14 gap-y-10">
                                    <p className="text-base leading-loose">
                                        Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact. Our journey began with a passionate group of visionary investors who saw the immense potential in supporting startups that challenge the status quo and drive positive change in various industries.
                                    </p>
                                    <p className="text-base leading-loose">
                                        Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact. Our journey began with a passionate group of visionary investors who saw the immense potential in supporting startups that challenge the status quo and drive positive change in various industries.
                                    </p>
                                    <p className="text-base leading-loose">
                                        Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact. Our journey began with a passionate group of visionary investors who saw the immense potential in supporting startups that challenge the status quo and drive positive change in various industries.
                                    </p>
                                    <p className="text-base leading-loose">
                                        Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact. Our journey began with a passionate group of visionary investors who saw the immense potential in supporting startups that challenge the status quo and drive positive change in various industries.
                                    </p>
                                </div>
                                <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center text-center mt-20 md:w-[70%] mx-auto">
                                    <div>
                                        <h3 className="font-bold mb-5 text-4xl">2025</h3>
                                        <p className="text-base">Founded In</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-5 text-4xl">500+</h3>
                                        <p className="text-base">Farmers Supported</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-5 text-4xl">2025</h3>
                                        <p className="text-base">Farmers Supported</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </DisplayLayout>
        </div>
    );
}
