import { partners } from '@/assets';
import { PATH } from '@/constants';

const PartnersTablet = () => {
    return (
        <section
            id="partners"
            className="w-auto min-h-[90vh] flex flex-col justify-center items-center py-[30px]"
        >
            <div className="flex flex-col gap-[70px] px-[20px]">
                <p className="mobile-section-blue">Partners</p>
                <div className="flex gap-[100px] flex-col justify-center items-center">
                    <a href="#" target='_self' class="flux-click">
                        <img src={partners} alt="flux" className='w-[225px] h-[150px] object-none cursor-pointer object-left partners-hover-effect' />
                    </a>
                    <a href={PATH.HASHGAMES} target='_blank' class="hashgames-click">
                        <img src={partners} alt="hashgames" className="w-[443px] h-[150px] object-none object-hashgames cursor-pointer partners-hover-effect" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PartnersTablet;
