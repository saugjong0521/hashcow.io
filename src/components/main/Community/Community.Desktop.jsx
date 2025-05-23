import { PATH } from "@/constants";
import { community_x, community_telegram, community_medium } from '@/assets';

const CommunityDesktop = () => {
    return (
        <section
            id="community"
            className="w-auto min-h-[50vh] flex flex-col justify-center items-center py-[40px]"
        >
            <div className="flex flex-col gap-[70px] w-full">
                <div>
                    <p className="text-section-blue">Community</p>
                </div>

                <div className="flex flex-wrap gap-[3vw] justify-center items-start w-full">


                    <div className="flex gap-[20px] flex-col w-[300px] justify-center items-center">
                        <div className="flex">
                            <a href={PATH.COMM_X} target="_blank">
                                <img src={community_x} className="community-hover-effect w-[200px] h-[200px]" />
                            </a>
                        </div>

                        <div className="flex flex-col w-min justify-center items-center gap-[10px]">
                            <div className="flex w-[300px] justify-center">
                                <p className="text-community-blue">Follow&nbsp;</p>
                                <p className="text-community-white">HCOW X!</p>
                            </div>

                            <div className="flex text-wrap text-center">
                                <p className="whitespace-normal">
                                    Follow us on X, stay update with the latest content, and grab the chance to win exciting airdrops!
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="border-l border-[#42878d] self-stretch w-[1px]" />

                    <div className="flex gap-[20px] flex-col w-[300px] justify-center items-center">

                        <div className="flex">
                            <a href={PATH.COMM_TELE} target="_blank">
                                <img src={community_telegram} className="community-hover-effect w-[200px] h-[200px]" />
                            </a>
                        </div>

                        <div className="flex flex-col w-min justify-center items-center gap-[10px]">
                            <div className="flex w-max">
                                <p className="text-community-blue">Join&nbsp;</p>
                                <p className="text-community-white">HCOW Telegram!</p>
                            </div>

                            <div className="flex text-wrap text-center">
                                <p className="whitespace-normal">
                                    Join our Telegram channel, stay update with the latest content, and seize the chance to win exciting airdrops!
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="border-l border-[#42878d] self-stretch w-[1px]" />

                    <div className="flex gap-[20px] flex-col w-[300px] justify-center items-center">

                        <div className="flex">
                            <a href={PATH.COMM_MED} target="_blank">
                                <img src={community_medium} className="community-hover-effect w-[200px] bg-[#000] h-[200px] border-[3px] border-[#42878D]" />
                            </a>
                        </div>

                        <div className="flex flex-col w-min justify-center items-center gap-[10px]">
                            <div className="flex w-max">
                                <p className="text-community-blue">Follow&nbsp;</p>
                                <p className="text-community-white">HCOW Medium!</p>
                            </div>

                            <div className="flex text-wrap text-center">
                                <p className="whitespace-normal">
                                    Follow our Medium Blog, Can explore HCOW’s philosophy, ecosystem vision, and project insights on our Medium blog.
                                </p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    );
};

export default CommunityDesktop;
