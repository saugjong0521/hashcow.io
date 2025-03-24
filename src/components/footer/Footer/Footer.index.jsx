import { useMobileBreakpoint } from '@/hooks';
import FooterMobile from './Footer.Mobile';
import FooterTablet from './Footer.Tablet';
import FooterDesktop from './Footer.Desktop';

const Footer = () => {
  const device = useMobileBreakpoint();

  if (device === 'mobile') return <FooterMobile />;
  if (device === 'tablet') return <FooterTablet />;
  return <FooterDesktop />;
};

export default Footer;
