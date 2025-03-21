import { hashcow_logo } from "@/assets";
import { useMobileBreakpoint } from "@/hooks";


const ContactUs = () => {

    const device = useMobileBreakpoint();

    return (
        <section id="contactus" className="w-auto min-h-[40vh] flex flex-col justify-center items-center">
            {(device === "mobile" || device === "tablet") ?

                <div className="flex flex-col gap-[20px] justify-center items-center">
                    <div className="flex">
                        <p className="mobile-section-blue">Contact us</p>
                    </div>
                    <p className="mobile-section-white">biz@hashcow.io</p>
                </div>

                :

                <div className="flex flex-col gap-[20px] justify-center items-center">
                    <div className="flex">
                        <img src={hashcow_logo} />
                        <p className="text-section-blue">Contact us</p>
                    </div>
                    <p className="text-section-white">biz@hashcow.io</p>
                </div>
            }
        </section>
    )


}


export default ContactUs;
