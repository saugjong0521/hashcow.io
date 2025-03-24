import { useMobileBreakpoint } from '@/hooks';
import PartnersMobile from './Partners.Mobile';
import PartnersTablet from './Partners.Tablet';
import PartnersDesktop from './Partners.Desktop';

const Partners = () => {
  const device = useMobileBreakpoint();

  if (device === 'mobile') return <PartnersMobile />;
  if (device === 'tablet') return <PartnersTablet />;
  return <PartnersDesktop />;
};

export default Partners;
