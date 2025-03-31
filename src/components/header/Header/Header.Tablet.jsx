import { useState } from 'react';
import { MobileNavModal } from '@/components';
import { hashcow_logo } from '@/assets';

const HeaderTablet = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleComingSoon = () => {
        return (
            alert('Public sale will start soon.')
        )
    }

    return (
        <>
            <div className="flex min-h-[90px] bg-header-bg justify-between items-center px-[50px]">
                {/* 로고 */}
                <div className="flex justify-content items-center">
                    <a href="./" className="flex w-[10vw] h-full mr-[20px]">
                        <img src={hashcow_logo} className="object-contain w-min h-min" />
                    </a>
                    <a href="./" className='flex justify-center items-center bg-transparent' onClick={(e) => { e.preventDefault(); handleComingSoon(); }}>
                        <button className='bg-transparent'>
                            <div className="border-[#69e9b6] h-min border-2 rounded-lg p-1">
                                <p className='text-sm font-bold text-[#69e9b6]'>PUBLIC SALE</p>
                            </div>
                        </button>
                    </a>
                </div>

                {/* 햄버거 메뉴 */}
                <div className="flex">
                    <div
                        className="w-8 h-6 flex flex-col justify-between cursor-pointer group"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <span className="block h-[3px] bg-white rounded transition-all duration-300 group-hover:translate-y-[11px] group-hover:rotate-45"></span>
                        <span className="block h-[3px] bg-white rounded transition-all duration-300 group-hover:opacity-0"></span>
                        <span className="block h-[3px] bg-white rounded transition-all duration-300 group-hover:-translate-y-[11px] group-hover:-rotate-45"></span>
                    </div>
                </div>
            </div>

            <MobileNavModal isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </>
    );
};

export default HeaderTablet;
