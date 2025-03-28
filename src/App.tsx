import "./App.css";
import Header from "./Components/Header";
import { BuyDream } from "./Components/BuyDream";
import { BestSelling } from "./Components/BestSelling";
import { About } from "./Components/About";
import { Categories } from "./Components/Categories";

import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="font-[Poppins]">
        <Header />
        <BuyDream />
        <BestSelling />
        <About />
        <Categories />
        {/* <MyCarousel /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
