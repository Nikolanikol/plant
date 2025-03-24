import "./App.css";
import Header from "./Components/Header";
import { BuyDream } from "./Components/BuyDream";
import { BestSelling } from "./Components/BestSelling";
import { About } from "./Components/About";
import { Categories } from "./Components/Categories";
import { MyCarousel } from "./UI/MyCarousel";

function App() {
  return (
    <>
      <div className="font-[Poppins]">
        <Header />
        <BuyDream />
        <BestSelling />
        <About />
        <Categories />
        <MyCarousel />
      </div>
    </>
  );
}

export default App;
