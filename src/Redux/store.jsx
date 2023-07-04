import { legacy_createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from "redux-thunk"
import { cartReducer } from "./Cart/Cart.reducer"
import { checkoutReducer } from "./Checkout/Checkout.reducer"
import { mensProductReducer } from "./Product/Product.reducer"
import { WomensProductReducer } from "./Product/Product.reducer"
import { KidsProductReducer } from "./Product/Product.reducer"
import { wishlistReducer } from "./Wishlist/Wishlist.reducer"


const rootReducer = combineReducers({
    mens: mensProductReducer,
    womens: WomensProductReducer,
    kids: KidsProductReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    checkout: checkoutReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

