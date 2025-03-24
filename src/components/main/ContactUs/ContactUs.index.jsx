import { useMobileBreakpoint } from '@/hooks';
import ContactUsMobile from './ContactUs.Mobile';
import ContactUsTablet from './ContactUs.Tablet';
import ContactUsDesktop from './ContactUs.Desktop';

const ContactUs = () => {
  const device = useMobileBreakpoint();

  if (device === 'mobile') return <ContactUsMobile />;
  if (device === 'tablet') return <ContactUsTablet />;
  return <ContactUsDesktop />;
};

export default ContactUs;
