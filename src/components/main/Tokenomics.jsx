import { tokenomics_chart } from "@/assets";


const Tokenomics = () => {

    return (
        <section id="tokenomics" className="w-auto min-h-[90vh] flex flex-col gap-[50px] justify-center items-center">
            <p className="text-logo-blue">Issuance & Distribution Plan</p>
            <img src={tokenomics_chart}/>
        </section>
    )


}


export default Tokenomics;
