import { hashcow_logo } from "@/assets";


const ContactUs = () => {

    return (
        <section id="contactus" className="w-auto min-h-[30vh] flex flex-col gap-[30px] justify-center items-center">
            <div className="flex gap-[20px]">
                <img src={hashcow_logo}/>
                <p className="text-logo-blue">Contact us</p>
            </div>
            <p className="text-logo-white">biz@hashcow.io</p>
            
        </section>
    )


}


export default ContactUs;
