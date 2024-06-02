import yt from "../../assets/youtube_icon.png"
import twt from "../../assets/twitter_icon.png"
import ins from "../../assets/instagram_icon.png"
import face from "../../assets/facebook_icon.png"

const Footer = () => {
  return (
    <div>
      <div className="icons flex ml-[13rem] gap-4 ">
        <img src={yt} alt="" className="h-10 w-10 cursor-pointer rounded-md" />
        <img src={twt} alt="" className="h-10 w-10 cursor-pointer rounded-md"  />
        <img src={ins} alt="" className="h-10 w-10 cursor-pointer rounded-md"  />
        <img src={face} alt="" className="h-10 w-10 cursor-pointer rounded-md"  />
      </div>

      <div className="grid grid-cols-4 w-full gap-1  mt-7 ml-[13rem]">
        <div className="flex flex-col gap-2 text-white">
          <p>Audio Description</p>
          <p>Investor Relations</p>
          <p>Legal Notices</p>
        </div>

        <div className="flex flex-col gap-1 text-white">
          <p>Audio Description</p>
          <p>Investor Relations</p>
          <p>Legal Notices</p>
        </div>

        <div className="flex flex-col gap-1 text-white">
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Cookie Preference</p>
        </div>

        <div className="flex flex-col gap-1 text-white">
          <p>Gift Cards</p>
          <p>Terms of Use</p>
          <p>Corporate Information</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
