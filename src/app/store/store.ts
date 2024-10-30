import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "@/pages/favorites/model/favoritesSlice";
import filterReducer from "@/pages/home/model/filterSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { apiArtworks } from "@/shared/api/apiArtworks";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["filter", apiArtworks.reducerPath],
};

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  filter: filterReducer,
  [apiArtworks.reducerPath]: apiArtworks.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiArtworks.middleware),
});

export const persistor = persistStore(store);
