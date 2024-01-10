import React from 'react';
import './Characters.scss';

export default function Characters({ posts, userInput }) {
    const filterPost = posts.filter((el) => {
        if (!userInput || userInput.trim() === '') {
            // Show all posts when no user input is provided
            return true;
        } else if (
            el.title &&
            el.title.text &&
            el.title.text.toLowerCase().includes(userInput.toLowerCase())
        ) {
            // Show posts that match the filter
            return true;
        }
        return false; // Exclude posts that don't match the filter
    });

    return (
        <div>
            <div id='anime-container'>
                {filterPost.map((post) => (
                    <div id='anime-card' key={post.hype}>
                        <img alt={post.title?.text} src={post.img} width={200} height={270} />
                        <p>{post.studio}</p>
                        <p>{post.genres.join(', ')}</p>
                        {/* <p>{post.description}</p> */}
                        <p><a href={post.title?.link}>{post.title?.text}</a></p>
                        <p>{post.start_date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
