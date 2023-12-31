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

  return (
    <div>
      <div>
        <Characters posts={currentPosts} />
        <Pagination postsPerPage={aniPerPage} totalPost={length} paginate={paginate} />
      </div>
    </div>
  )
}
