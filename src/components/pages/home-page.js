import React from 'react';
import BookList from '../book-list/book-list';

const HomePage = () => {
    const books = [
        {
            id: 1,
            title: 'Prodaction-Ready Microservices',
            author: 'Susan J. Fowler',
        },
        {
            id: 2,
            title: 'Release it!',
            author: 'Michael T. Nygard',
        }
    ]
    return <BookList books={books} />
}

export default HomePage;