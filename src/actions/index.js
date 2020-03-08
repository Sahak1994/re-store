const booksRequested = () => {
    
    return {
        type: 'FETCH-BOOKS_REQUEST',
    }
}

const booksLoaded = (newBooks) => {

    return {
        type: 'FETCH-BOOKS_SUCCESS',
        payload: newBooks,
    }
}

const booksError = (error) => {
    return {
        type: 'FETCH-BOOKS_FAILURE',
        payload: error,
    }
}

const onAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId,
    }
}

const fetchBooks = (bookstoreService, dispatch) => () => {

    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then(data => {
            // dispatch action to store
        dispatch(booksLoaded(data))
        })
        .catch(err => dispatch(booksError(err)));
}

export {
    fetchBooks,
    onAddedToCart
}