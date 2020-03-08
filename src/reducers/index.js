const initialState = {
    books: [],
    loading: true,
    error: false,
    cartItems: [
        {
            id: 1,
            name: 'Book-1',
            count: 3,
            total: 150,
        },
        {
            id: 2,
            name: 'Book-2',
            count: 2,
            total: 70,
        },
    ],
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
        case "FETCH-BOOKS_FAILURE":
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default reducer;