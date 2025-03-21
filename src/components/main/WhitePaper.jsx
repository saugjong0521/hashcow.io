import { whitepaper_logo } from "@/assets";


const WhitePaper = () => {

    return (
        <section id="whitepaper" className="w-auto min-h-[90vh] flex flex-col gap-[70px] justify-center items-center">
            <p className="text-logo-blue">White Paper</p>
            <img src={whitepaper_logo}/>
            <button className="w-[300px] h-[70px] rounded-full bg-[#27c767]">
                <p className="text-main-white">Link</p>
                <link/>
            </button>
        </section>
    )


}


export default WhitePaper;
