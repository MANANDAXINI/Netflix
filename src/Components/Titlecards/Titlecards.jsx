import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Titlecards.css";

const Titlecards = ({ title, searchQuery }) => {
    const cardRef = useRef();
    const [fetchedData, setFetchedData] = useState([]);

    const apiKey = 'b336543d'; // Your OMDb API key
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`;

    const handleWheel = (event) => {
        event.preventDefault();
        const scrollAmount = 50;
        const isLeftRightScroll = Math.abs(event.deltaX) > Math.abs(event.deltaY);

        if (isLeftRightScroll) {
            cardRef.current.scrollLeft += event.deltaX > 0 ? scrollAmount : -scrollAmount;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
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
    }, [url]); // Refetch when the URL changes

    return (
        <div className="titlecards mt-[50px] mb-[30px]">
            <h2 className="mb-[8px] text-white text-2xl text-left">{title}</h2>
            <div ref={cardRef} className="card-list flex gap-3 overflow-x-scroll scrollbar-hide pb-2">
                {fetchedData.map((card, index) => (
                    <div className="card min-w-[240px] flex-none" key={index}>
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
