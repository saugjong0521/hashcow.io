import { tokenomics_chart } from "@/assets";
import { useMobileBreakpoint } from "@/hooks";


const Tokenomics = () => {

    const device = useMobileBreakpoint();

    return (
        <section id="tokenomics" className={`w-auto ${(device === "mobile" || device === "tablet") ? "min-h-[70vh]" : "min-h-[90vh]"} flex flex-col justify-center items-center`}>
            {(device === "mobile" || device === "tablet") ?
                <div className="flex flex-col px-[20px] gap-[20px]">
                    <p className="mobile-section-blue">Issuance & Distribution Plan</p>
                    <img src={tokenomics_chart} />
                </div>
                :
                <div className="flex flex-col gap-[70px]">
                    <p className="text-section-blue">Issuance & Distribution Plan</p>
                    <img src={tokenomics_chart} />
                </div>
            }
        </section>
    )


}


export default Tokenomics;
