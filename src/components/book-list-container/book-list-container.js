import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchBooks, bookAddedToCart } from '../../actions';
import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import BookList from '../book-list';

class BookListContainer extends Component {

    componentDidMount() {
        // from mapDispatchToProps
        this.props.fetchBooks();
        
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;
        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <BookList books={books}
                    onAddedToCart={onAddedToCart} />

        
    }
}

const mapStateToProps = ({ books, loading, error }) => {
    return {
        books,
        loading,
        error,
    }
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }

}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)
(BookListContainer)