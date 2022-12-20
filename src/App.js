import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import { Home } from "./pages/home/Home";
import { Create } from "./pages/create/Create";
import { Recipe } from "./pages/recipe/Recipe";
import { Search } from "./pages/search/Search";

// components
import Navbar from "./components/Navbar";
import ThemeSelector from "./components/ThemeSelector";

// hook

import { useTheme } from "./hooks/useTheme";

// styles
import "./App.css";

function App() {
  const { mode } = useTheme();
  return (
    <div className={` App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/recipe/:id">
            <Recipe />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
