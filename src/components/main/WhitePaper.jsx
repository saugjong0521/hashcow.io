import { whitepaper_logo } from "@/assets";
import { useMobileBreakpoint } from "@/hooks";


const WhitePaper = () => {

    const device = useMobileBreakpoint();

    return (
        <section id="whitepaper" className={`w-auto ${(device === "mobile" || device === "tablet") ? "min-h-[50vh]" : "min-h-[80vh]"} flex flex-col justify-center items-center`}>
            {(device === "mobile" || device === "tablet") ?

                <div className="flex flex-col justify-center items-center gap-[30px]">
                    <p className="mobile-section-blue">White Paper</p>
                    <div className="flex w-2/3">
                        <img src={whitepaper_logo} />
                    </div>
                    <button className="w-[150px] h-[40px] rounded-full bg-[#27c767]">
                        <p className="mobile-button-white">Link</p>
                        <link />
                    </button>
                </div>

                :

                <div className="flex flex-col gap-[70px]">
                    <p className="text-section-blue">White Paper</p>
                    <img src={whitepaper_logo} />
                    <button className="w-[300px] h-[60px] rounded-full bg-[#27c767]">
                        <p className="text-main-white">Link</p>
                        <link />
                    </button>
                </div>

            }
        </section>
    )


}


export default WhitePaper;

