import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk"
import rootReducers from "./reducers/rootReducers";
import { createWrapper } from "next-redux-wrapper"

const middleware = [thunk]
const makeStore = () => createStore(rootReducers, compose(applyMiddleware(...middleware)))
export const wrapper = createWrapper(makeStore);