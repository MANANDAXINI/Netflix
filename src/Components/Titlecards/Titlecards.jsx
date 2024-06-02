import { useRef, useEffect } from "react";
import cards_data from "../../assets/cards/Cards_data";
import "./Titlecards.css";

// eslint-disable-next-line react/prop-types
const Titlecards = ({ title }) => {
    const cardRef = useRef();

    const handleWheel = (event) => {
        event.preventDefault();
        const scrollAmount = 50; // Adjust this value to control the scrolling speed for left/right movements
        const isLeftRightScroll = Math.abs(event.deltaX) > Math.abs(event.deltaY);

        if (isLeftRightScroll) {
            cardRef.current.scrollLeft += event.deltaX > 0 ? scrollAmount : -scrollAmount;
        }
    };

    useEffect(() => {
        const currentRef = cardRef.current;
        currentRef.addEventListener('wheel', handleWheel);

        return () => {
            currentRef.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <div className="titlecards mt-[50px] mb-[30px]">
            <h2 className="mb-[8px] text-white text-2xl text-left ">{title ? title : "Popular on Netflix"}</h2>
            <div ref={cardRef} className="card-list flex gap-3 overflow-x-scroll scrollbar-hide pb-2">
                {cards_data.map((card, index) => (
                    <div className="card min-w-[240px] flex-none" key={index}>
                        <img src={card.image} alt={card.name} className="w-full h-80 object-cover" />
                        <p className="mt-2 text-white font-bold text-center">{card.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Titlecards;
