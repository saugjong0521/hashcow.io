import { about_symbol_1, about_symbol_2, hashcow_logo } from '@/assets';

const AboutDesktop = () => {
  return (
    <section id="about" className="flex flex-col w-full items-center justify-center">
      <div className="flex w-full h-full justify-center items-center bg-about-bg bg-cover bg-no-repeat bg-right">
        <div className="flex mx-[50px] w-full items-center">
          <div className="flex w-3/5 flex-col justify-between gap-[15px] text-left">
            <div className="flex flex-col gap-[15px]">
              <p className="text-main-white">Transparent and Fair Randomness,</p>
              <div className="flex">
                <p className="text-main-white">Empowered by&nbsp;</p>
                <p className="text-main-blue">Blockchain Trust.</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-content-gray">Fairplay, proven by blockchain, the future of gaming RNG,</p>
              <p className="text-content-gray">gaming infrastructure transformed with blockchain.</p>
              <p className="text-content-gray">Beginning of fair and transparent gaming.</p>
            </div>
          </div>
          <div className="flex w-2/5">
            <div className="flex w-full py-[50px]">
              <img src={about_symbol_1} className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full h-full">
        <div className="flex mx-[50px] w-full items-center">
          <div className="flex py-[50px] w-2/5">
            <img src={about_symbol_2} className="w-full h-auto object-contain" />
          </div>
          <div className="flex flex-col w-3/5 gap-[20px]">
            <div className="flex w-full h-min justify-end pr-[30px]">
              <img src={hashcow_logo} className="pr-[10px] object-contain" />
              <p className="text-logo-blue">HASH</p>
              <p className="text-logo-white">COW</p>
            </div>
            <p className="text-left text-content-gray leading-8">
              HashCow project is designed to build a fair and transparent blockchain gaming ecosystem by leveraging blockchain technology's RNG and VRF technologies.
              The blockchain gaming platform is structured around the ecosystem utility cryptocurrency HashCow (HCOW), which plays a variety of roles within the VegasLedger blockchain platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDesktop;
