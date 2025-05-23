import { roadmap_chart } from '@/assets';

const RoadmapMobile = () => {
  return (
    <section
      id="roadmap"
      className="w-auto min-h-[90vh] flex flex-col justify-center items-center py-[20px]"
    >
      <div className="flex flex-col gap-[30px] px-[20px]">
        <p className="mobile-section-blue">Roadmap</p>
        <img src={roadmap_chart} alt="roadmap" />
      </div>
    </section>
  );
};

export default RoadmapMobile;
