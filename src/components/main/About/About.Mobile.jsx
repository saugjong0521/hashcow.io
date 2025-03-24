import { hashcow_logo, about_symbol_1, about_symbol_2 } from '@/assets';

const AboutMobile = () => {
  return (
    <section id="about" className="flex flex-col w-full items-center justify-center py-[20px]">
      <div className="flex flex-col gap-[10vh] my-[5vh]">

        {/* 카드 1 */}
        <div className="flex flex-col justicy-center items-center w-full">
          <div className="flex flex-col bg-[#ffffff] w-4/5 h-min py-[50px] justify-center items-center rounded-3xl gap-[40px]">
            <div className="flex w-[200px] h-[200px] rounded-full bg-[#090000] justify-center items-center">
              <img src={hashcow_logo} className="object-none object-center" />
            </div>
            <div className="flex">
              <p className="mobile-main-blue">HASH</p>
              <p className="mobile-main-gray">COW</p>
            </div>
            <p className="text-black px-[20px] text-center">
              HashCow project is designed to build a fair and transparent blockchain gaming ecosystem by leveraging blockchain technology's RNG and VRF technologies.
            </p>
          </div>
        </div>

        {/* 카드 2 */}
        <div className="flex flex-col justicy-center items-center w-full">
          <div className="flex flex-col bg-[#ffffff] w-4/5 h-min py-[50px] justify-center items-center rounded-3xl gap-[40px]">
            <div className="flex w-[200px] h-[200px] rounded-full bg-[#090000] justify-center items-center">
              <img src={about_symbol_1} className="object-cover object-center w-4/5" />
            </div>
            <div className="flex flex-col items-center">
              <p className="mobile-main-gray">Transparent & Fair Randomness,</p>
              <p className="mobile-main-gray">Empowered by Blockchain Trust.</p>
            </div>
            <p className="text-black px-[20px] text-center">
              Fairplay, proven by blockchain, the future of gaming RNG, gaming infrastructure transformed with blockchain. Beginning of fair and transparent gaming.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMobile;
