import { useMobileBreakpoint } from '@/hooks';
import HeaderMobile from './Header.Mobile';
import HeaderTablet from './Header.Tablet';
import HeaderDesktop from './Header.Desktop';

const Header = () => {
  const device = useMobileBreakpoint();

  if (device === 'mobile') return <HeaderMobile />;
  if (device === 'tablet') return <HeaderTablet />;
  return <HeaderDesktop />;
};

export default Header;
