const CommunityTablet = () => {
    return (
      <section
        id="community"
        className="w-auto min-h-[50vh] flex flex-col justify-center items-center bg-[#ffffff]"
      >
        <div className="flex flex-col w-full gap-[30px] justify-center items-center">
          <div className="bg-[#0adabb] w-min px-[30px] rounded-full">
            <p className="mobile-section-white2">Community</p>
          </div>
  
          <div className="flex flex-wrap gap-[20px] justify-center">
            <div className="flex flex-col">
              <div className="flex">
                <p>Follow&nbsp;</p>
                <p>HashCow X!</p>
              </div>
            </div>
  
            <div className="flex flex-col">
              <div className="flex">
                <p>Join&nbsp;</p>
                <p>HashCow Telegram!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CommunityTablet;
  