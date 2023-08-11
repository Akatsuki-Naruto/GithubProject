import { useState } from "react";

import "./App.css";
import { Menu } from "./components/Menu";
import Example from "./components/dropdown";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Menu />
    </>
  );
}

export default App;
