import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import { save } from "redux-localstorage-simple";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(save({ namespace: "text-editor" })))
  );

const store = configureStore({});

export default store;
