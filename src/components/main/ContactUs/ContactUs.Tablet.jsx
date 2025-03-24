import { useState } from 'react';

const ContactUsTablet = () => {
  const [copied, setCopied] = useState(false);
  const email = 'biz@hashcow.io';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contactus"
      className="w-auto min-h-[40vh] flex flex-col justify-center items-center py-[30px]"
    >
      <div className="flex flex-col gap-[40px] justify-center items-center">
        <div className="flex">
          <p className="mobile-section-blue">Contact us</p>
        </div>

        <div className="flex items-center gap-2">
          <p className="tablet-section-white">{email}</p>
          <button
            onClick={handleCopy}
            className="text-[#4dd9a2] text-lg border border-[#4dd9a2] px-2 py-[4px] rounded transition"
          >
            {copied ? '✔' : 'Copy'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUsTablet;
