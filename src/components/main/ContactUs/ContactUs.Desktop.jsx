import { useState } from 'react';
import { hashcow_logo } from '@/assets';

const ContactUsDesktop = () => {
  const [copied, setCopied] = useState(false);
  const email = 'biz@hash-cow.io';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contactus"
      className="w-auto min-h-[40vh] flex flex-col justify-center items-center py-[40px]"
    >
      <div className="flex flex-col gap-[50px] justify-center items-center">
        <div className="flex items-center gap-2">
          <img src={hashcow_logo} alt="logo" />
          <p className="text-section-blue">Contact us</p>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-section-white">{email}</p>
          <button
            onClick={handleCopy}
            className="text-[#4dd9a2] hover:text-white text-lg border border-[#4dd9a2] px-2 py-1 rounded transition"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUsDesktop;
