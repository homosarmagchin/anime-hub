import React from 'react'
import Anime from '../Anime.json'

export default function Characters({ posts }) {
    return (
        <div>
            <div id='anime-container'>
                {posts.map((post) => (
                    <div id='anime-card' key={post.hype}>
                        <img alt={post.title.text} src={post.img} width={200} height={300} />
                        <p>{post.studio}</p>
                        <p>{post.genres.join(', ')}</p>
                        <p>{post.description}</p>
                        <p><a href={post.title.link}>{post.title.text}</a></p>
                        <p>{post.start_date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
