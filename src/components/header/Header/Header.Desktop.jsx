import { hashcow_logo } from '@/assets';
import { Nav } from '@/components';

const HeaderDesktop = () => {
    return (
        <div className="flex bg-header-bg bg-no-repeat object-fill w-screen h-max px-[3vw] gap-[5vw] min-h-[90px] justify-between items-center">
            <div className="flex justify-between w-full">
                {/* 로고 */}
                <a href="./" className="flex w-[10vw] h-full">
                    <img src={hashcow_logo} className="object-contain w-min h-min" />
                </a>

                {/* 네비게이션 */}
                <div className="flex w-4/5 justify-between items-center">
                    <Nav />
                </div>
            </div>
        </div>
    );
};

export default HeaderDesktop;
