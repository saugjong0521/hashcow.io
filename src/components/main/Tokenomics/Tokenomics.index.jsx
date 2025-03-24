import { useMobileBreakpoint } from '@/hooks';
import TokenomicsMobile from './Tokenomics.Mobile';
import TokenomicsTablet from './Tokenomics.Tablet';
import TokenomicsDesktop from './Tokenomics.Desktop';

const Tokenomics = () => {
  const device = useMobileBreakpoint();

  if (device === 'mobile') return <TokenomicsMobile />;
  if (device === 'tablet') return <TokenomicsTablet />;
  return <TokenomicsDesktop />;
};

export default Tokenomics;
