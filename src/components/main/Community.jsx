import { useMobileBreakpoint } from "@/hooks";



const Community = () => {

    const device = useMobileBreakpoint();

    return (
        <section id="community" className={`w-auto min-h-[50vh] flex flex-col justify-center items-center ${(device === "mobile" || device === "tablet") ? " bg-[#ffffff]" : "" }`}>
            {(device === "mobile" || device === "tablet") ?

                <div className="flex flex-col w-full gap-[30px] justify-center items-center">

                    <div className="bg-[#0adabb] w-min px-[30px] rounded-full">
                        <p className="mobile-section-white2">Community</p>
                    </div>

                    <div className="flex">

                        <div className="flex flex-col">
                            <div className="flex">
                                <p>Follow&nbsp;</p><p>HashCow X!</p>
                            </div>
                        </div>
                        <div className="">
                            {/* <img src={}/> */}
                        </div>

                        <div className="flex flex-col">
                            <div className="flex">
                                <p>Join&nbsp;</p><p>HashCow Telegram!</p>
                            </div>
                        </div>
                        <div className="">
                            {/* <img src={}/> */}
                        </div>

                    </div>

                </div>


                :

                <div className="flex flex-col gap-[70px] ">

                    <div className="">
                        <p className="text-section-blue">Community</p>
                    </div>

                    <div className="flex">

                        <div className="flex flex-col">
                            <div className="flex">
                                <p>Follow&nbsp;</p><p>HashCow X!</p>
                            </div>
                            <p>Follow us on X, stay update with the latest content, and grab the chance to win exciting airdrops!</p>
                        </div>
                        <div className="">
                            {/* <img src={}/> */}
                        </div>

                        <div className="flex flex-col">
                            <div className="flex">
                                <p>Join&nbsp;</p><p>HashCow Telegram!</p>
                            </div>
                            <p>Join our Telegram channel, stay update with the latest content, and seize the chance to win exciting airdrops!</p>
                        </div>
                        <div className="">
                            {/* <img src={}/> */}
                        </div>

                    </div>
                </div>

            }
        </section>
    )

}


export default Community;
