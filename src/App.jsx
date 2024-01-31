import "./App.css";
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
        <div className="content-ResultandFilter">
          <Filter />
          <ResultTable />
        </div>
      </CartProvider>
    </SearchProvider>
  );
}

export default App;
