import { roadmap_chart } from "@/assets";
import { useMobileBreakpoint } from "@/hooks";


const Roadmap = () => {

    const device = useMobileBreakpoint();

    return (
        <section id="roadmap" className={`w-auto ${(device === "mobile" || device === "tablet") ? "min-h-[80vh]" : "min-h-[110vh]"} flex flex-col justify-center items-center`}>
            {(device === "mobile" || device === "tablet") ?
                <div className="flex flex-col gap-[30px] px-[20px]">
                    <p className="mobile-section-blue">Roadmap</p>
                    <img src={roadmap_chart} />
                </div>
                :
                <div className="flex flex-col gap-[70px]">
                    <p className="text-section-blue">Roadmap</p>
                    <img src={roadmap_chart} />
                </div>
            }
        </section>
    )

}


export default Roadmap;
