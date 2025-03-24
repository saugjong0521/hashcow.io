import { useMobileBreakpoint } from '@/hooks';
import NavMobile from './Nav.Mobile';
import NavTablet from './Nav.Tablet';
import NavDesktop from './Nav.Desktop';

const Nav = () => {
  const device = useMobileBreakpoint();

  if (device === 'mobile') return <NavMobile />;
  if (device === 'tablet') return <NavTablet />;
  return <NavDesktop />;
};

export default Nav;
