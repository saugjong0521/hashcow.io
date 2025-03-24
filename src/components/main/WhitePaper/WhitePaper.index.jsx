import { useMobileBreakpoint } from '@/hooks';
import WhitePaperMobile from './WhitePaper.Mobile';
import WhitePaperTablet from './WhitePaper.Tablet';
import WhitePaperDesktop from './WhitePaper.Desktop';

const WhitePaper = () => {
  const device = useMobileBreakpoint();

  if (device === 'mobile') return <WhitePaperMobile />;
  if (device === 'tablet') return <WhitePaperTablet />;
  return <WhitePaperDesktop />;
};

export default WhitePaper;
