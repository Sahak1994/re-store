import React from 'react';

import BookListItem from '../book-list-item';

import './book-list.css';

const BookList = ({ books, onAddedToCart }) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    const { id } = book
                    return (
                        <li key={id}>
                            <BookListItem 
                                book={book}
                                onAddedToCart={() => onAddedToCart(id)} />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default BookList;
