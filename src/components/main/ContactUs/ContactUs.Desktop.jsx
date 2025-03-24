import { hashcow_logo } from '@/assets';

const ContactUsDesktop = () => {
  return (
    <section id="contactus" className="w-auto min-h-[40vh] flex flex-col justify-center items-center">
      <div className="flex flex-col gap-[20px] justify-center items-center">
        <div className="flex items-center gap-2">
          <img src={hashcow_logo} alt="logo" />
          <p className="text-section-blue">Contact us</p>
        </div>
        <p className="text-section-white">biz@hashcow.io</p>
      </div>
    </section>
  );
};

export default ContactUsDesktop;
