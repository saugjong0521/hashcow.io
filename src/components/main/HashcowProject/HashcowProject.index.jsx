import { useMobileBreakpoint } from '@/hooks';
import HashcowProjectMobile from './HashcowProject.Mobile';
import HashcowProjectTablet from './HashcowProject.Tablet';
import HashcowProjectDesktop from './HashcowProject.Desktop';

const HashcowProject = () => {
  const device = useMobileBreakpoint();

  if (device === 'mobile') return <HashcowProjectMobile />;
  if (device === 'tablet') return <HashcowProjectTablet />;
  return <HashcowProjectDesktop />;
};

export default HashcowProject;
