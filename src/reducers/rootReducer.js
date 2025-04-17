// import { combineReducers } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';

import { useReducer } from "./userReducer";
import { wishlistReducer } from "./wishlistReducer";
import cartReducer from './cartReducer';
import currentProductReducer from './currentProductReducer';

//we can create user reducer for 
const rootReducer = combineReducers({
       user:useReducer,
       wishlist: wishlistReducer,
       cart :cartReducer,
       currentProduct:currentProductReducer
})

export default rootReducer;


