import { tokenomics_chart } from '@/assets';

const TokenomicsMobile = () => {
  return (
    <section
      id="tokenomics"
      className="w-auto min-h-[70vh] flex flex-col justify-center items-center py-[20px]"
    >
      <div className="flex flex-col px-[20px] gap-[20px]">
        <p className="mobile-section-blue">Issuance & Distribution Plan</p>
        <img src={tokenomics_chart} alt="tokenomics chart" />
      </div>
    </section>
  );
};

export default TokenomicsMobile;
