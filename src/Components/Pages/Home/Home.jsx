import Navbar from "../../../Components/Navbar/Navbar";
import herotitle from "../../../assets/hero_title.png";
import hero from "../../../../public/hero_banner.jpg";
import play_icon from "../../../assets/play_icon.png";
import info_icon from "../../../assets/info_icon.png";
import "../Home/Home.css";
import Titlecards from "../../Titlecards/Titlecards";
import Footer from "../../Footer/Footer";

const Home = () => {
  const handlePlayClick = () => {
    // Open the YouTube trailer URL in a new tab
    window.open('https://www.youtube.com/watch?v=sBEvEcpnG7k', '_blank');
  };

  return (
    <div className="home">
      <Navbar />
      <div className="hero relative">
        <img src={hero} alt="" className="relative banner-img " />

        <div className="herocaption absolute w-[100%] pl-[6%] bottom-0">
          <img src={herotitle} alt="" className="width-[90%] max-w-[420px]" />
          <p className="max-w-[700px] text-md mb-5 text-white">
            Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy
          </p>
          <div className="herobtns flex gap-3 mb-[50px]">
            <button className="btn border-0 outline-0 px-8 py-2 inline-flex items-center gap-3 text-lg font-semibold bg-white rounded-md" onClick={handlePlayClick}>
              <img src={play_icon} alt="" className="w-[25px]" /> Play
            </button>
            <button className="btn dark-btn text-white bg-opacity-75 bg-gray-700">
              <img src={info_icon} alt="" className="w-[25px]" /> More Info
            </button>
          </div>
          <Titlecards title="Popular on Netflix" searchQuery="netflix" />
        </div>
      </div>

      <div className="morecards pl-[6%]">
        <Titlecards title="Blockbuster Movies" searchQuery="blockbuster" />
        <Titlecards title="Upcoming" searchQuery="upcoming" />
        <Titlecards title="Top Picks For You" searchQuery="top picks" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
