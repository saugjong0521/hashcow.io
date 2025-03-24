import { whitepaper_logo } from '@/assets';
import { PATH } from '@/constants';

const WhitePaperMobile = () => {
    return (
        <section
            id="whitepaper"
            className="w-auto min-h-[50vh] flex flex-col justify-center items-center py-[20px]"
        >
            <div className="flex flex-col justify-center items-center gap-[30px]">
                <p className="mobile-section-blue">White Paper</p>
                <div className="flex w-2/3">
                    <img src={whitepaper_logo} alt="White Paper" />
                </div>
                <a href={PATH.WHITEPAPER} target='_blank'>
                    <button className="w-[150px] h-[40px] rounded-full bg-[#27c767]">
                        <p className="mobile-button-white">Link</p>
                    </button>
                </a>
            </div>
        </section>
    );
};

export default WhitePaperMobile;
