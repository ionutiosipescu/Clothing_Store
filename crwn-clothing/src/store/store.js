import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";

// localstorage config
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Before
// pentru a vedea state-ul in consola
// const middleWares = [logger]
// After
// vedem state-ul in consola + isi da seama daca esti in developer mode sau production
// pentru a activa acest logger

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean);

// verifica in ce envaroment esti si iti permite sa folosesti redux extension din crome
// optional
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);

// THUNK este folosit pentru functiile async
// aduce modificari in mai multe fisiere dar este foarte asemanator cu procesele
// care sunt related cu async functions, adica avem chestiile legate de Promiseuri
// start, succes, failed, async, await, try, catch, consume
