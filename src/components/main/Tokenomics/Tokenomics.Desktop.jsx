import { tokenomics_chart } from '@/assets';

const TokenomicsDesktop = () => {
  return (
    <section
      id="tokenomics"
      className="w-auto min-h-[90vh] flex flex-col justify-center items-center py-[40px]"
    >
      <div className="flex flex-col gap-[70px]">
        <p className="text-section-blue">Issuance & Distribution Plan</p>
        <img src={tokenomics_chart} alt="tokenomics chart" />
      </div>
    </section>
  );
};

export default TokenomicsDesktop;
