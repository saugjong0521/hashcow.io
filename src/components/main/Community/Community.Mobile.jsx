import { PATH } from "@/constants";
import { community_x, community_telegram, community_medium } from '@/assets';

const CommunityMobile = () => {
    return (
        <section
            id="community"
            className="w-auto min-h-[50vh] flex flex-col justify-center items-center bg-[#ffffff] py-[20px]"
        >
            <div className="flex flex-col w-full gap-[30px] justify-center items-center">
                <div className="bg-[#777777] w-min px-[30px] rounded-full">
                    <p className="mobile-section-white2">Community</p>
                </div>

                <div className="flex flex-wrap justify-center gap-[30px] w-full">

                    <div className="flex flex-col gap-[20px] justify-center items-center">
                        <div className="flex flex-col border w-[110px] rounded-md border-[#777777]">
                            <p className="mobile-community-gray">Follow X!</p>
                        </div>

                        <div className="flex">
                            <a href={PATH.COMM_X} target="_blank">
                                <img src={community_x} className="community-hover-effect w-[100px]" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[20px] justify-center items-center">
                        <div className="flex flex-col border w-[110px] rounded-md border-[#777777]">
                            <p className="mobile-community-gray">Join Telegram!</p>
                        </div>

                        <div className="flex">
                            <a href={PATH.COMM_TELE} target="_blank">
                                <img src={community_telegram} className="community-hover-effect w-[100px]"/>
                            </a>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-[20px] justify-center items-center">
                        <div className="flex flex-col border w-[110px] rounded-md border-[#777777]">
                            <p className="mobile-community-gray">Follow Medium!</p>
                        </div>

                        <div className="flex">
                            <a href={PATH.COMM_MED} target="_blank">
                                <img src={community_medium} className="community-hover-effect w-[98px] bg-[#000] border-[2px] border-[#42878D]"/>
                            </a>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default CommunityMobile;
