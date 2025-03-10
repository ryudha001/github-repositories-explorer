import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import UsersRepositories from "./pages/UsersRepositories";

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UsersRepositories />
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
