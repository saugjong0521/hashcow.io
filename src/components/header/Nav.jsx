import { useMobileBreakpoint } from "@/hooks";


const Nav = () => {

    const device = useMobileBreakpoint();

    return (
        <nav className='flex w-full'>
            <ul className={`flex w-full h-full justify-between ${device === "mobile" && "flex-col text-header-white" || device === "tablet" && "flex-col tablet-header-modal" || "text-header-white"}`}>
                <li>
                    <a href="#about" className='cursor-pointer'>
                        <p>ABOUT</p>
                    </a>
                </li>
                <li>
                    <a href="#hashcowproject" className='cursor-pointer'>
                        <p>HASHCOW PROJECT</p>
                    </a>
                </li>
                <li>
                    <a href="#tokenomics" className='cursor-pointer'>
                        <p>TOKENOMICS</p>
                    </a>
                </li>
                <li>
                    <a href="#whitepaper" className='cursor-pointer'>
                        <p>WHITE PAPER</p>
                    </a>
                </li>
                <li>
                    <a href="#roadmap" className='cursor-pointer'>
                        <p>ROADMAP</p>
                    </a>
                </li>
                <li>
                    <a href="#community" className='cursor-pointer'>
                        <p>COMMUNITY</p>
                    </a>
                </li>
                <li>
                    <a href="#contactus" className='cursor-pointer'>
                        <p>CONTACT US</p>
                    </a>
                </li>
            </ul>
        </nav>
    )

}


export default Nav;