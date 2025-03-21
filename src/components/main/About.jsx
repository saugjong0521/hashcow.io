import { about_bg, hashcow_logo, about_symbol_1, about_symbol_2 } from "@/assets";



const About = () => {
    return (
        <div className="flex flex-col w-full h-full">

            <div className="flex h-1/2 justify-center items-center">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col">
                        <p className="">Transparent and Fair Randomness,</p>
                        <p className="">Empowered by Blockchain Trust.</p>
                    </div>
                    <div className="flex flex-col ">
                        <p className="">Fairplay, proven by blockchain, the future of gaming RNG,</p>
                        <p className="">gaming infrastructure transformed with blockchain.</p>
                        <p className="">Beginning of fair and transparent gaming</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="">
                        <img src={about_symbol_1}/>
                    </div>
                </div>
            </div>


            <div className="flex h-1/2">
                <div className="flex">
                    <div className="flex">
                        <div className="">
                            <img src={about_symbol_2}/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex">
                            <img src={hashcow_logo}/>
                            <p>HASH</p>
                            <p>COW</p>
                        </div>
                        <p className="">
                            HashCow project is designed to build a fair and transparent blockchain gaming ecosystem by leveraging blockchain technology's RNG and VRF technologies.
                            The blockchain gaming platform is structured around the ecosystem utility cryptocurrency HashCow (HCOW), which plays a variety of roles within the VegasLedger blockchain platform.
                        </p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default About;