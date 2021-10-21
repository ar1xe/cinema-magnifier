import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import StartPage from "./pages/startPage/StartPage";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <div>
      <Header />
      <StartPage />
      <Footer />
    </div>
  );
}

export default App;
