import { useMobileBreakpoint } from '@/hooks';
import RoadmapMobile from './Roadmap.Mobile';
import RoadmapTablet from './Roadmap.Tablet';
import RoadmapDesktop from './Roadmap.Desktop';

const Roadmap = () => {
  const device = useMobileBreakpoint();

  if (device === 'mobile') return <RoadmapMobile />;
  if (device === 'tablet') return <RoadmapTablet />;
  return <RoadmapDesktop />;
};

export default Roadmap;
