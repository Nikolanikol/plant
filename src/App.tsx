import { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import { BuyDream } from "./Components/BuyDream";
import { BestSelling } from "./Components/BestSelling";
import { About } from "./Components/About";
import { Categories } from "./Components/Categories";

function App() {
  return (
    <>
      <div className="font-[Poppins]">
        <Header />
        <BuyDream />
        <BestSelling />
        <About />
        <Categories />
      </div>
    </>
  );
}

export default App;
