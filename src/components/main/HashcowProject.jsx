import { hashcowproject_chart } from "@/assets";
import { useMobileBreakpoint } from "@/hooks";


const HashcowProject = () => {

    const device = useMobileBreakpoint();

    return (



        <section id="hashcowproject" className={`w-auto ${(device === "mobile" || device === "tablet") ? "min-h-[60vh]" : "min-h-[100vh]"} flex flex-col justify-center items-center`}>
            {(device === "mobile" || device === "tablet") ?
                <div className="flex flex-col px-[20px] gap-[20px]">
                    <p className="mobile-section-blue">Ecosystem Business Model</p>
                    <img src={hashcowproject_chart} />
                </div>
                :
                <div className="flex flex-col gap-[10vh]">
                    <p className="text-section-blue">Ecosystem Business Model</p>
                    <img src={hashcowproject_chart} />
                </div>
            }
        </section>
    )


}


export default HashcowProject;
