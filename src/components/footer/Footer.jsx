import { useMobileBreakpoint } from "@/hooks";


const Footer = () => {

    const device = useMobileBreakpoint();

    return (
        <div className="flex min-h-[10vh] justify-center items-center">
            {device === "mobile" ? 
                <p className="mobile-footer-white">Copyright 2024 © Hashcow All rights reserved.</p>
            :
                <p className="text-footer-white">Copyright 2024 © Hashcow All rights reserved.</p>
            }
        </div>
    )
}

export default Footer;