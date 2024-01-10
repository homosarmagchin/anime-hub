import React, { useState } from 'react';
import Anime from '../Anime.json';
import Characters from './Characters';
import Pagination from './Pagination';
import './CharacterField.scss';

export default function CharacterField() {
  const [currentPage, setCurrentPage] = useState(1);
  const [aniPerPage] = useState(9);
  const indexOfLastPost = currentPage * aniPerPage;
  const indexOfFirstPost = indexOfLastPost - aniPerPage;
  const currentPosts = Anime.Data.slice(indexOfFirstPost, indexOfLastPost);
  const length = Anime.Data.length;
  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);
  const [userInput, setUserInput] = useState('');

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div>
      <div id='char-field'>
        <div id='search-section'>
          <label htmlFor="userInput"> </label>
          <input
            type="text"
            id="userInput"
            placeholder='Search'
            value={userInput}
            onChange={handleChange}
          />
        </div>
        <Characters posts={currentPosts} userInput={userInput} />
        <div id='pagination'>
          <Pagination postsPerPage={aniPerPage} totalPost={length} paginate={paginate} />
        </div>
      </div>
    </div>
  )
}
