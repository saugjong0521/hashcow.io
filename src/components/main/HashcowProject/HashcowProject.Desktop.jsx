import { hashcowproject_chart } from '@/assets';

const HashcowProjectDesktop = () => {
  return (
    <section
      id="hashcowproject"
      className="w-auto min-h-[100vh] flex flex-col justify-center items-center py-[40px] px-[3vw]"
    >
      <div className="flex flex-col gap-[10vh]">
        <p className="text-section-blue">Ecosystem Business Model</p>
        <img src={hashcowproject_chart} alt="ecosystem business model" />
      </div>
    </section>
  );
};

export default HashcowProjectDesktop;
