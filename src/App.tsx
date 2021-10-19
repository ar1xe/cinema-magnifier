import React from "react";
import Header from "./components/header/Header";
import StartPage from "./pages/startPage/StartPage";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <div>
      <StartPage />
      <Header />
    </div>
  );
}

export default App;
