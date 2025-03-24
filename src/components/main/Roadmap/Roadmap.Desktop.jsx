import { roadmap_chart } from '@/assets';

const RoadmapDesktop = () => {
  return (
    <section
      id="roadmap"
      className="w-auto min-h-[110vh] flex flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-[70px]">
        <p className="text-section-blue">Roadmap</p>
        <img src={roadmap_chart} alt="roadmap" />
      </div>
    </section>
  );
};

export default RoadmapDesktop;
