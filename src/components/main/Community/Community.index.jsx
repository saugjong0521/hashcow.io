import { useMobileBreakpoint } from '@/hooks';
import CommunityMobile from './Community.Mobile';
import CommunityTablet from './Community.Tablet';
import CommunityDesktop from './Community.Desktop';

const Community = () => {
  const device = useMobileBreakpoint();

  if (device === 'mobile') return <CommunityMobile />;
  if (device === 'tablet') return <CommunityTablet />;
  return <CommunityDesktop />;
};

export default Community;
