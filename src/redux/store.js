import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { allReducer } from "./reducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
export const store = createStore(
    allReducer,
    composeEnhancers(applyMiddleware(thunk))
)