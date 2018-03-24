import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import ProductReducer from './reducer_product';
import DeliveryReducer from './reducer_delivery';

const rootReducer = combineReducers({
    product: ProductReducer,
    deliveryInfo: DeliveryReducer
});

export default rootReducer;
