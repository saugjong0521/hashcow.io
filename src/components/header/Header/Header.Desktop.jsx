import { hashcow_logo } from '@/assets';
import { Nav } from '@/components';

const HeaderDesktop = () => {
  return (
    <div className="flex min-h-[90px] bg-header-bg justify-between items-center px-[50px]">
      {/* 로고 */}
      <div className="flex w-[10vw] h-full">
        <img src={hashcow_logo} className="object-contain w-min h-min" />
      </div>

      {/* 네비게이션 */}
      <div className="flex w-4/5 justify-between items-center">
        <Nav />
      </div>
    </div>
  );
};

export default HeaderDesktop;
