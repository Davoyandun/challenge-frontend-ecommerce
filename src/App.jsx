import "./App.css";
import { Cart } from "./components/Cart";
import { Filter } from "./components/Filter";
import { Navbar } from "./components/Navbar";
import { ResultInfoBar } from "./components/ResultInfoBar";
import { ResultTable } from "./components/ResultTable";
import { CartProvider } from "./contexts/CartContext";
import { SearchProvider } from "./contexts/SearchContext";

function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <Navbar />

        <ResultInfoBar />
        <div className="MainContent">
          <Filter />
          <ResultTable />
          <Cart />
        </div>
      </CartProvider>
    </SearchProvider>
  );
}

export default App;
