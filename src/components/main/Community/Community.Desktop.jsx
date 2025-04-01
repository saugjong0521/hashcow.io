import { PATH } from "@/constants";
import { community_x, community_telegram } from '@/assets';

const CommunityDesktop = () => {
    return (
        <section
            id="community"
            className="w-auto min-h-[50vh] flex flex-col justify-center items-center py-[40px]"
        >
            <div className="flex flex-col gap-[70px]">
                <div>
                    <p className="text-section-blue">Community</p>
                </div>

                <div className="flex flex-wrap gap-[20px] justify-center items-start">


                    <div className="flex gap-[20px]">
                        <div className="flex flex-col w-min">
                            <div className="flex w-max">
                                <p className="text-community-blue">Follow&nbsp;</p>
                                <p className="text-community-white">HashCow X!</p>
                            </div>

                            <div className="flex text-wrap text-right">
                                <p className="whitespace-normal">
                                    Follow us on X, stay update with the latest content, and grab the chance to win exciting airdrops!
                                </p>
                            </div>
                        </div>

                        <div className="flex">
                            <a href={PATH.COMM_X} target="_blank">
                                <img src={community_x} className="community-hover-effect"/>
                            </a>
                        </div>
                    </div>

                    <div className="border-l border-[#42878d] self-stretch w-[1px]" />

                    <div className="flex gap-[20px]">
                        <div className="flex flex-col w-min">
                            <div className="flex w-max">
                                <p className="text-community-blue">Join&nbsp;</p>
                                <p className="text-community-white">HashCow Telegram!</p>
                            </div>

                            <div className="flex text-wrap text-right">
                                <p className="whitespace-normal">
                                    Join our Telegram channel, stay update with the latest content, and seize the chance to win exciting airdrops!
                                </p>
                            </div>
                        </div>

                        <div className="flex">
                            <a href={PATH.COMM_TELE} target="_blank">
                                <img src={community_telegram} className="community-hover-effect"/>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CommunityDesktop;
