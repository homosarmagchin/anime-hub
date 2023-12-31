import React from 'react';
import './Pagination.scss';
const Pagination = ({ postsPerPage, totalPost, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <div id='mama'>
                <nav id='pagination'>
                    <ul>
                        {pageNumbers.map(number => (
                            <li key={number.toString()}>
                                <div onClick={() => { paginate(number) }} >
                                    {number}
                                </div>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Pagination;
