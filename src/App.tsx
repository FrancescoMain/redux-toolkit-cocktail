import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Index/Index";
import SingleCocktail from "./pages/SingleCocktail/SingleCocktail";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cocktail/:id" element={<SingleCocktail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
