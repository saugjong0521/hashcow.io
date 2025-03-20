import { About } from "@/components";


function Layout() {

    return (
        <>
            <div className="flex w-screen h-screen bg-[#222222] justify-center">
                <div className="flex h-screen w-4/5 bg-[#000000]">
                    <About/>
                </div>
            </div>
        </>
    )
}

export default Layout;