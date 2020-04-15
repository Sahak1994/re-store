const updateCartItems = (cartItems, item, idx) => {

   if (item.count === 0) {
      return [
         ...cartItems.slice(0, idx),
         ...cartItems.slice(idx + 1),
      ]
   }

   if (idx === -1) {
      return [
         ...cartItems,
         item
      ]
   } else {
      return [
         ...cartItems.slice(0, idx),
         item,
         ...cartItems.slice(idx + 1),
      ]
   }
}

const updateCartItem = (book, item = {}, quantity) => {

   const { id = book.id, title = book.title, count = 0, total = 0 } = item;

   return {
      id,
      title,
      count: count + quantity,
      total: total + quantity * book.price,
   }
}

const updateOrderTotal = (cartItems) => {
   let totalSum = 0;
   cartItems.forEach((item) => {
      totalSum += item.total
   })

   return totalSum
}

const updateCountTotal = (cartItems) => {
   let totalSum = 0;
   cartItems.forEach((item) => {
      totalSum += item.count
   })

   return totalSum
}

const updateOrder = (state, payload, quantity) => {

   const { bookList: { books }, shoppingCart: { cartItems } } = state;
   const id = payload;
   const book = books.find((book) => book.id === id);
   const idx = cartItems.findIndex(({id}) => id === book.id);
   const item = cartItems.find(({id}) => id === book.id);

   const newItem = updateCartItem(book, item, quantity);
   
   return {
      countTotal: updateCountTotal( updateCartItems(cartItems, newItem, idx) ),
      orderTotal: updateOrderTotal( updateCartItems(cartItems, newItem, idx) ),
      cartItems: updateCartItems(cartItems, newItem, idx)
   }
}

const updateShoppingCart = (state, action) => {

   if (state === undefined) {
      return {
         countTotal: 0,
         cartItems: [],
         orderTotal: 0,
      }
   }
   
   switch(action.type) {
      case 'BOOK_ADDED_TO_CART':
         return updateOrder(state, action.payload, 1)

      case 'ALL_BOOKS_REMOVED_FROM_CART':
         const item = state.shoppingCart.cartItems.find((book) => book.id ===action.payload);
         return updateOrder(state, action.payload, -item.count)
         
      case 'BOOK_REMOVED_FROM_CART':
         return updateOrder(state, action.payload, -1)

      default: 
         return state.shoppingCart
   }
}

export default updateShoppingCart