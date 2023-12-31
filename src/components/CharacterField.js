import React from 'react';
import Anime from '../Anime.json'
import './CharacterField.scss';
export default function CharacterField() {
  return (
    <div>
      <div>
        <div id='anime-container'>
          {Anime.Data.map((anime) => (
            <div id='anime-card' key={anime.hype}>
              <img alt={anime.title.text} src={anime.img} width={300} height={500} />
              <p>{anime.studio}</p>
              <p>{anime.genres.join(', ')}</p> {/* Join genres array into a string */}
              <p>{anime.description}</p>
              <p><a href={anime.title.link}>{anime.title.text}</a></p>
              <p>{anime.start_date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
