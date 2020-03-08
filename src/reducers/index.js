const initialState = {
    books: [],
    loading: true,
    error: false,
    cartItems: [],
    orderTotal: 220
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'FETCH-BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: false,
            }
        case 'FETCH-BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                loading: true,
                error: false,
            }
        case 'FETCH-BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload,
            }
        case 'BOOK_ADDED_TO_CART':
            const bookId = action.payload;
            const book = state.books.find(book => book.id === bookId)
            const newItem = {
                id: book.id,
                name: book.title,
                count: 1,
                total: book.price,
            }
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    newItem,
                ]
            }
        default:
            return state
    }
}

export default reducer;