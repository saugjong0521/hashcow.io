import { useMobileBreakpoint } from '@/hooks';
import AboutMobile from './About.Mobile';
import AboutTablet from './About.Tablet';
import AboutDesktop from './About.Desktop';

const About = () => {
  const device = useMobileBreakpoint();

  if (device === 'mobile') return <AboutMobile />;
  if (device === 'tablet') return <AboutTablet />;
  return <AboutDesktop />;
};

export default About;
