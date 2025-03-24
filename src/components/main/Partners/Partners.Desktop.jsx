import { partners } from '@/assets';
import { PATH } from '@/constants';

const PartnersDesktop = () => {
    return (
        <section
            id="partners"
            className="w-auto min-h-[60vh] flex flex-col justify-center items-center py-[40px]"
        >
            <div className="flex flex-col gap-[70px]">
                <p className="text-section-blue">Partners</p>
                <div className="flex gap-[100px]">
                    <a href="#" target='_self'>
                        <img src={partners} alt="flux" className='w-[225px] h-[150px] object-none cursor-pointer object-left partners-hover-effect' />
                    </a>
                    <a href={PATH.HASHGAMES} target='_blank'>
                        <img src={partners} alt="hashgames" className="w-[443px] h-[150px] object-none object-hashgames cursor-pointer partners-hover-effect" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PartnersDesktop;
