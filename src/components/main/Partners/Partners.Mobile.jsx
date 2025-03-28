import { partners_1, partners_2 } from '@/assets';
import { PATH } from '@/constants';

const PartnersMobile = () => {
    return (
        <section
            id="partners"
            className="w-auto min-h-[90vh] flex flex-col justify-center items-center py-[20px]"
        >
            <div className="flex flex-col gap-[70px] px-[20px]">
                <p className="mobile-section-blue">Partners</p>
                <div className="flex gap-[100px] flex-col justify-center items-center">
                    <a href="#" target='_self' data-gtm-id="flux-click">
                        <img src={partners_1} alt="flux" className='w-[225px] h-[150px] object-none cursor-pointer object-left partners-hover-effect' />
                    </a>
                    <a href={PATH.HASHGAMES} target='_blank' data-gtm-id="hashgames-click">
                        <img src={partners_2} alt="hashgames" className="w-[300px] h-[150px] object-contain cursor-pointer partners-hover-effect" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PartnersMobile;
