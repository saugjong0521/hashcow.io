const CommunityDesktop = () => {
    return (
      <section
        id="community"
        className="w-auto min-h-[50vh] flex flex-col justify-center items-center"
      >
        <div className="flex flex-col gap-[70px]">
          <div>
            <p className="text-section-blue">Community</p>
          </div>
  
          <div className="flex flex-wrap gap-[60px] justify-center items-start">
            <div className="flex flex-col max-w-[300px]">
              <div className="flex">
                <p>Follow&nbsp;</p>
                <p>HashCow X!</p>
              </div>
              <p>
                Follow us on X, stay update with the latest content, and grab the chance to win exciting airdrops!
              </p>
            </div>
  
            <div className="flex flex-col max-w-[300px]">
              <div className="flex">
                <p>Join&nbsp;</p>
                <p>HashCow Telegram!</p>
              </div>
              <p>
                Join our Telegram channel, stay update with the latest content, and seize the chance to win exciting airdrops!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CommunityDesktop;
  