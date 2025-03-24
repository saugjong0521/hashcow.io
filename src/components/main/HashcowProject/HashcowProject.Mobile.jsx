import { hashcowproject_chart } from '@/assets';

const HashcowProjectMobile = () => {
  return (
    <section
      id="hashcowproject"
      className="w-auto min-h-[60vh] flex flex-col justify-center items-center py-[20px]"
    >
      <div className="flex flex-col px-[20px] gap-[20px]">
        <p className="mobile-section-blue">Ecosystem Business Model</p>
        <img src={hashcowproject_chart} alt="ecosystem business model" />
      </div>
    </section>
  );
};

export default HashcowProjectMobile;
