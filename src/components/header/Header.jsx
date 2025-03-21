import { header_bg, hashcow_logo } from '@/assets'
import { About } from '../main';

const Header = () => {

    return (
        <div className="flex min-h-[10vh] bg-header-bg justify-between items-center px-[50px]">
            <div className="">
                <img src={hashcow_logo} />
            </div>
            <div className="flex w-4/5 justify-between items-center">
                <nav className='flex w-full'>
                    <ul className='flex w-full justify-between'>
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
                            <a href="#whitepaper" className='cursor-pointer'>
                                <p>WHITE PAPER</p>
                            </a>
                        </li>
                        <li>
                            <a href="#contactus" className='cursor-pointer'>
                                <p>CONTACT US</p>
                            </a> 
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;