import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import App from "./App";

test("renders GitHub Repositories Explorer", () => {
  render(
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </ReduxProvider>
  );

  const titleElement = screen.getByText(/GitHub Repositories Explorer/i);
  expect(titleElement).toBeInTheDocument();
});
