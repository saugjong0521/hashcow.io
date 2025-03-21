import { About } from "@/components";


function Layout() {

    return (
        <>
            <div className="flex w-screen h-screen bg-[#06071B] justify-center">
                <div className="relative h-full w-full max-w-[1400px] bg-[#000000]">
                    <About />
                </div>
            </div>
        </>
    )
}

export default Layout;