import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from '../Reducers/reducer'
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
	persistedReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
