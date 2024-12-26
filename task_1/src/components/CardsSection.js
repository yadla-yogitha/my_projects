import React, { useState } from 'react';
import Card from './Card';
import { cardData } from '../utils/cardData';
import '../styles/cardSection.css';

function CardsSection() {
  const pageSize = 6;

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const [filteredCards, setFilteredCards] = useState(getDisplayedCards());

  function getDisplayedCards() {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return cardData.slice(startIndex, endIndex);
  }

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();

    const filtered = cardData.filter(
      (card) =>
        card.title.toLowerCase().includes(term) ||
        card.workout.join(' ').toLowerCase().includes(term)
    );

    setFilteredCards(filtered.slice(0, pageSize));
    setCurrentPage(1); 
  };

  const handleNextPage = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);

    const startIndex = (newPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setFilteredCards(cardData.slice(startIndex, endIndex));
  };

  const handlePrevPage = () => {
    const newPage = currentPage - 1;
    setCurrentPage(newPage);

    const startIndex = (newPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setFilteredCards(cardData.slice(startIndex, endIndex));
  };

  return (
    <section id='exercises' className='card-section'>
      <div className='search-box'>
        <h3>Awesome <span>Exercises</span> You Should Know</h3>
        <div className='search-input'>
          <input
            type='text'
            placeholder='Search Exercises here'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="card-list">
        {filteredCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div className="pagination-buttons">
        {currentPage > 1 && (
          <button onClick={handlePrevPage}>Prev</button>
        )}
        {currentPage * pageSize < cardData.length && (
          <button onClick={handleNextPage}>Next</button>
        )}
      </div>
    </section>
  );
}

export default CardsSection;
