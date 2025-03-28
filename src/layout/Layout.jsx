import { 
    Header,

    About, 
    HashcowProject, 
    Tokenomics, 
    WhitePaper, 
    Roadmap,
    Community,
    Partners,
    ContactUs,

    Footer,
} from "@/components";



function Layout() {

    return (
        <>
            <div className="flex w-screen h-min bg-[#06071B] justify-center">
                <div className="flex flex-col h-min w-full">
                    <Header />

                    <About />
                    <HashcowProject />
                    <Tokenomics />
                    <WhitePaper />
                    <Roadmap />
                    <Community />
                    <Partners />
                    <ContactUs />

                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Layout;