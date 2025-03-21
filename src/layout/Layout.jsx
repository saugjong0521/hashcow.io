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
                <div className="relative h-min w-full max-w-[1200px]">
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