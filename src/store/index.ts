import { configureStore } from "@reduxjs/toolkit";
import type { TypedUseSelectorHook } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { githubApi } from "./slices/users/api";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { persistStore } from "redux-persist";
import rootSaga from "./sagas";
import { reset, rootReducer } from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: (state, action) => {
    return rootReducer(state, action);
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      sagaMiddleware,
      githubApi.middleware
    ),
});

sagaMiddleware.run(rootSaga);

export const resetStore = () => {
  reset(store);
};

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const useDispatch = () => useReduxDispatch<AppDispatch>();
