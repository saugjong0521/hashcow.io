import { partners } from '@/assets';

const PartnersMobile = () => {
    return (
        <section
            id="partners"
            className="w-auto min-h-[90vh] flex flex-col justify-center items-center"
        >
            <div className="flex flex-col gap-[70px] px-[20px]">
                <p className="mobile-section-blue">Partners</p>
                <div className="flex gap-[100px] flex-col justify-center items-center">
                    <a href="#" target='_self'>
                        <img src={partners} alt="flux" className='w-[225px] h-[150px] object-none cursor-pointer object-left' />
                    </a>
                    <a href={PATH.HASHGAMES} target='_blank'>
                        <img src={partners} alt="hashgames" className="w-[443px] h-[150px] object-none object-hashgames cursor-pointer" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PartnersMobile;
