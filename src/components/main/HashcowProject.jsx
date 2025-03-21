import { hashcowproject_chart } from "@/assets";


const HashcowProject = () => {

    return (
        <section id="hashcowproject" className="w-auto min-h-[100vh] flex flex-col gap-[15vh] justify-center items-center">
            <p className="text-logo-blue">Ecosystem Business Model</p>
            <img src={hashcowproject_chart}/>
        </section>
    )


}


export default HashcowProject;
