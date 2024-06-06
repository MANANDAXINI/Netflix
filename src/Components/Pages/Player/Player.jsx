import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';
import backarrow from "../../../assets/back_arrow_icon.png";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState('');
  const omdbApiKey = 'b336543d'; // Your OMDb API key
  const youtubeApiKey = 'AIzaSyBZvw1lGWHlYPMGTWhOZ2O5zOcep_42Gfw'; // Your YouTube API key

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${omdbApiKey}`);
        const data = response.data;
        setMovieData(data);

        // Construct YouTube search URL based on the movie title
        const youtubeSearchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(data.Title + ' trailer')}&key=${youtubeApiKey}`;

        // Fetch YouTube search results and extract video URL
        const youtubeResponse = await axios.get(youtubeSearchUrl);
        if (youtubeResponse.data.items.length > 0) {
          const videoId = youtubeResponse.data.items[0].id.videoId;
          setTrailerUrl(`https://www.youtube.com/embed/${videoId}`);
        } else {
          console.error('Trailer not found');
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData();
  }, [id, omdbApiKey, youtubeApiKey]);

  return (
    <div className="player h-[100vh] flex flex-col justify-center items-center relative">
      <img 
        src={backarrow} 
        alt="Back" 
        onClick={() => navigate(-1)} 
        className="absolute top-[20px] left-[20px] w-[50px] cursor-pointer"
      />
      {trailerUrl ? (
        <ReactPlayer 
          url={trailerUrl} 
          controls 
          width="90%" 
          height="70%"
          className="mt-4"
        />
      ) : (
        <p>Trailer not available</p>
      )}
      {movieData && (
        <div className="Playerinfo flex items-center justify-between w-[90%] mt-4">
          <p>Published Date: {movieData.Released}</p>
          <p>Name: {movieData.Title}</p>
          <p>Type: {movieData.Type}</p>
        </div>
      )}
    </div>
  );
}

export default Player;
