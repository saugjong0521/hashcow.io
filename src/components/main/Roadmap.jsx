import { roadmap_chart } from "@/assets";


const Roadmap = () => {

    return (
        <section id="roadmap" className="w-auto min-h-[110vh] flex flex-col gap-[70px] justify-center items-center">
            <p className="text-logo-blue">Roadmap</p>
            <img src={roadmap_chart}/>
        </section>
    )

}


export default Roadmap;
