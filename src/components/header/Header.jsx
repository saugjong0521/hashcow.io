import { header_bg, hashcow_logo } from '@/assets'
import { About, Nav, MobileNavModal } from '@/components';
import { useMobileBreakpoint } from '@/hooks';
import { useState } from 'react';

const Header = () => {

    const device = useMobileBreakpoint();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>

            <div className={`flex min-h-[90px] bg-header-bg justify-between items-center ${device === "mobile" ? "px-[30px]" : "px-[50px]"}`}>

                {/* 로고 */}
                <div className="flex w-[10vw] h-full">
                    {(device === 'other' || device === "tablet" ) &&
                        <img src={hashcow_logo} className='object-contain w-min h-min' />
                    }
                    {(device === 'mobile') &&
                        <div className="flex">
                            <p className='mobile-header-blue'>HASH</p><p className='mobile-header-white'>COW</p>
                        </div>
                    }
                </div>

                {/* 네비게이터, 햄버거메뉴 */}
                {(device === 'mobile' || device === "tablet") &&
                    <div className="flex">
                        <div
                            className="w-8 h-6 flex flex-col justify-between cursor-pointer group"
                            onClick={() => setIsMobileMenuOpen(true)} // ✅ 여기에 추가
                        >
                            <span className="block h-[3px] bg-white rounded transition-all duration-300 group-hover:translate-y-[11px] group-hover:rotate-45"></span>
                            <span className="block h-[3px] bg-white rounded transition-all duration-300 group-hover:opacity-0"></span>
                            <span className="block h-[3px] bg-white rounded transition-all duration-300 group-hover:-translate-y-[11px] group-hover:-rotate-45"></span>
                        </div>
                    </div>
                }
                {(device === 'other') &&
                    <div className="flex w-4/5 justify-between items-center">
                        <Nav />
                    </div>
                }
            </div>

            <MobileNavModal
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </>
    )
}

export default Header;