import { whitepaper_logo } from '@/assets';
import { PATH } from '@/constants';

const WhitePaperDesktop = () => {
    return (
        <section
            id="whitepaper"
            className="w-auto min-h-[80vh] flex flex-col justify-center items-center"
        >
            <div className="flex flex-col gap-[70px] items-center">
                <p className="text-section-blue">White Paper</p>
                <img src={whitepaper_logo} alt="White Paper" />
                <a href={PATH.WHITEPAPER} target='_blank'>
                    <button className="w-[300px] h-[60px] rounded-full bg-[#27c767] whitepaper-hover-effect">
                        <p className="text-main-white">Link</p>
                    </button>
                </a>
            </div>
        </section>
    );
};

export default WhitePaperDesktop;
