import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

const Titlecards = ({ title, searchQuery }) => {
    const cardRef = useRef();
    const [fetchedData, setFetchedData] = useState([]);
    const navigate = useNavigate();
    const omdbApiKey = 'b336543d'; // Your OMDb API key

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch movie data from OMDB
                const response = await fetch(`http://www.omdbapi.com/?apikey=${omdbApiKey}&s=${searchQuery}`);
                const result = await response.json();

                if (result.Response === "True") {
                    // Filter out movies without posters
                    const filteredData = result.Search.filter(movie => movie.Poster !== "N/A");
                    setFetchedData(filteredData);
                } else {
                    console.error("Error fetching data: ", result.Error);
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();

        const currentRef = cardRef.current;
        currentRef.addEventListener('wheel', handleWheel);

        return () => {
            currentRef.removeEventListener('wheel', handleWheel);
        };
    }, [searchQuery, omdbApiKey]); // Refetch when the searchQuery or omdbApiKey changes

    const handleWheel = (event) => {
        event.preventDefault();
        const scrollAmount = 50;
        const isLeftRightScroll = Math.abs(event.deltaX) > Math.abs(event.deltaY);

        if (isLeftRightScroll) {
            cardRef.current.scrollLeft += event.deltaX > 0 ? scrollAmount : -scrollAmount;
        }
    };

    const handleClick = (imdbID) => {
        navigate(`/player/${imdbID}`);
    };

    return (
        <div className="titlecards mt-[50px] mb-[30px]">
            <h2 className="mb-[8px] text-white text-2xl text-left">{title}</h2>
            <div ref={cardRef} className="card-list flex gap-3 overflow-x-scroll scrollbar-hide pb-2">
                {fetchedData.map((card, index) => (
                    <div 
                        className="card min-w-[240px] flex-none cursor-pointer" 
                        key={index} 
                        onClick={() => handleClick(card.imdbID)}
                    >
                        <img 
                            src={card.Poster} 
                            alt={card.Title} 
                            className="w-full h-80 object-cover" 
                        />
                        <p className="mt-2 text-white font-bold text-center">{card.Title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

Titlecards.propTypes = {
    title: PropTypes.string.isRequired,
    searchQuery: PropTypes.string.isRequired,
};

export default Titlecards;
