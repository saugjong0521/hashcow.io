import { useMobileBreakpoint } from '@/hooks';
import Mobile from './MobileNavModal.Mobile';
import Tablet from './MobileNavModal.Tablet';
import Desktop from './MobileNavModal.Desktop';

const MobileNavModal = (props) => {
  const device = useMobileBreakpoint();

  if (device === 'mobile') return <Mobile {...props} />;
  if (device === 'tablet') return <Tablet {...props} />;
  return <Desktop {...props} />; // desktop에서는 null 처리
};

export default MobileNavModal;