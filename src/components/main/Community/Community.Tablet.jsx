import { PATH } from "@/constants";
import { community_x, community_telegram } from '@/assets';

const CommunityTablet = () => {
    return (
        <section
            id="community"
            className="w-auto min-h-[50vh] flex flex-col justify-center items-center bg-[#ffffff] py-[30px]"
        >
            <div className="flex flex-col w-full gap-[40px] justify-center items-center">

                <div className="bg-[#777777] w-min px-[30px] rounded-full">
                    <p className="mobile-section-white2">Community</p>
                </div>

                <div className="flex flex-wrap justify-center gap-[70px] w-full">

                    <div className="flex flex-col gap-[20px]">
                        <div className="flex border-2 border-[#777777] rounded-lg w-[200px] justify-center items-center">
                            <p className="tablet-community-gray">Follow X</p>
                        </div>

                        <div className="flex">
                            <a href={PATH.COMM_TELE} target="_blank" class="x-click">
                                <img src={community_x} className="community-hover-effect w-[200px]" />
                            </a>
                        </div>
                    </div>



                    <div className="flex flex-col gap-[20px]">
                        <div className="flex border-2 border-[#777777] rounded-lg w-[200px] justify-center items-center">
                            <p className="tablet-community-gray">Join Telegram</p>
                        </div>

                        <div className="flex">
                            <a href={PATH.COMM_TELE} target="_blank" class="telegram-click">
                                <img src={community_telegram} className="community-hover-effect w-[200px]" />
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default CommunityTablet;
