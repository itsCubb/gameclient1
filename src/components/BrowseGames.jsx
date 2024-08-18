import React, { useEffect, useRef } from 'react';
import './BrowseGames.css';
import PropHuntImage from '../assets/PropHunt.png';

const games = [
  { name: "Game 1", image: PropHuntImage, content: "Content for Game 1" }, 
  { name: "Game 2", content: "Content for Game 2" },
  { name: "Game 3", content: "Content for Game 3" },
  { name: "Game 4", content: "Content for Game 4" },
  { name: "Game 5", content: "Content for Game 5" }
];

const BrowseGames = ({ onGameClick }) => {  // Add the onGameClick prop
  const carouselRef = useRef(null);
  const scrollInterval = useRef(null);

  const startScrolling = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const totalHeight = carousel.scrollHeight - carousel.clientHeight;
    let scrollAmount = carousel.scrollTop;

    scrollInterval.current = setInterval(() => {
      scrollAmount += 0.2;
      carousel.scrollTop = scrollAmount;

      if (scrollAmount >= totalHeight) {
        scrollAmount = 1;
        carousel.scrollTop = 1;
      }
    }, 5);
  };

  const stopScrolling = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
    }
  };

  useEffect(() => {
    startScrolling();
    return () => stopScrolling();
  }, []);

  return (
    <div className="browse-games" ref={carouselRef}>
      <div className="carousel">
        {Array(100).fill(games).flat().map((game, index) => (
          <div 
            key={index} 
            className="game-option"
            onClick={() => onGameClick(game.content)}  // Add onClick handler
            onMouseEnter={stopScrolling} 
            onMouseLeave={startScrolling}
          >
            {typeof game === 'object' && game.image ? (
            <img src={game.image} alt={game.name} className="game-image" />
            ) : (
            game.name  // Render the name instead of the full object
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseGames;
