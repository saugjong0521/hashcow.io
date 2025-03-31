import { hashcow_logo } from '@/assets';
import { Nav } from '@/components';

const HeaderDesktop = () => {


    const handleComingSoon = () => {
        return (
            alert('Public sale will start soon.')
        )
    }


    return (
        <div className="flex bg-header-bg bg-no-repeat object-fill w-screen h-max px-[3vw] gap-[5vw] min-h-[90px] justify-between items-center">
            <div className="flex justify-between w-full">
                {/* 로고 */}
                <div className="flex justify-content items-center">
                    <a href="./" className="flex w-content h-full pr-[30px]">
                        <img src={hashcow_logo} className="object-contain w-min h-min" />
                    </a>
                    <a href="./" className='flex justify-center items-center bg-transparent' onClick={(e) => { e.preventDefault(); handleComingSoon(); }}>
                        <button className='bg-transparent'>
                            <div className="border-[#69e9b6] h-min border-2 rounded-lg p-1">
                                <p className='text-sm font-bold text-[#69e9b6] max-[1250px]:text-[11px]'>PUBLIC SALE</p>
                            </div>
                        </button>
                    </a>
                </div>

                {/* 네비게이션 */}
                <div className="flex w-4/5 justify-between items-center">
                    <Nav />
                </div>
            </div>
        </div>
    );
};

export default HeaderDesktop;
