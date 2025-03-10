import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { usersReducer } from "../store/slices";
import { rootReducer } from "../store/root-reducer";

export function createTestStore(
  preloadedState?: Partial<ReturnType<typeof rootReducer>>
) {
  return configureStore({
    reducer: {
      users: usersReducer,
    },
    preloadedState,
  });
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = createTestStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
