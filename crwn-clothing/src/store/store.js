import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// idk
const middleWares = [logger];

const composeEnhancers = compose(applyMiddleware(...middleWares));

// root reducer
export const store = createStore(rootReducer, undefined, middleWares);
