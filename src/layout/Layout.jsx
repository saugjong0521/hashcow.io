import { 
    Header,

    About, 
    HashcowProject, 
    Tokenomics, 
    WhitePaper, 
    Roadmap,
    Community,
    ContactUs,

    Footer,
} from "@/components";



function Layout() {

    return (
        <>
            <div className="flex w-screen h-min bg-[#06071B] justify-center">
                <div className="flex flex-col h-min w-full max-w-[1280px] min-w-[360px]">
                    <Header />

                    <About />
                    <HashcowProject />
                    <Tokenomics />
                    <WhitePaper />
                    <Roadmap />
                    <Community />
                    <ContactUs />

                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Layout;