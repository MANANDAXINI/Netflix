import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Player = () => {
  const { id } = useParams();
  const [trailerUrl, setTrailerUrl] = useState('');
  const omdbApiKey = 'b336543d'; // Your OMDb API key
  const youtubeApiKey = 'AIzaSyAREnEhvVUXxGxZiJc22rSWaONfmblJRUQ'; // Your YouTube API key

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        // Fetch movie data from OMDB
        const omdbResponse = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${omdbApiKey}`);
        const movieData = omdbResponse.data;

        // Extract movie title from OMDB data
        const movieTitle = encodeURIComponent(movieData.Title);

        // Fetch YouTube trailer using movie title
        const youtubeSearchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${movieTitle} trailer&key=${youtubeApiKey}`;
        const youtubeResponse = await axios.get(youtubeSearchUrl);

        if (youtubeResponse.data.items.length > 0) {
          // Extract video ID from YouTube response
          const videoId = youtubeResponse.data.items[0].id.videoId;
          setTrailerUrl(`https://www.youtube.com/watch?v=${videoId}`);
        } else {
          console.error('Trailer not found');
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData();
  }, [id, omdbApiKey, youtubeApiKey]);

  useEffect(() => {
    // Open trailer URL in a new tab when trailerUrl is set
    if (trailerUrl) {
      window.open(trailerUrl, '_blank');
    }
  }, [trailerUrl]);

  return (
    <div>
      <p>Loading trailer...</p>
    </div>
  );
};

export default Player;
