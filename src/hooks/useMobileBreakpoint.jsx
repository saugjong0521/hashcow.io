import { useEffect, useState } from 'react';

const getDeviceSize = (width) => {
  if (width < 768) return 'mobile';
  if (width < 1025) return 'tablet'
  return 'desktop';
};

const useMobileBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(() => getDeviceSize(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getDeviceSize(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};


export { useMobileBreakpoint };