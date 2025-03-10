import { combineReducers, AnyAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storageLocal from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import { usersActions, usersReducer, userSlice, githubApi } from "./slices";
import { Store } from "redux";
import type { RootState } from "./index";

interface PersistConfig {
  key: string;
  storage: typeof storageLocal | typeof storageSession;
}

const persistConfig = (key: string, storage = storageSession) => {
  const config: PersistConfig = {
    key,
    storage,
  };
  return config;
};

const usersPersistConfig = persistConfig(userSlice.name, storageSession);

export const rootReducer = combineReducers({
  users: persistReducer(usersPersistConfig, usersReducer),
  [githubApi.reducerPath]: githubApi.reducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;

export const reset = (store: Store<RootState, AnyAction>) => {
  store.dispatch(usersActions.reset());
};
