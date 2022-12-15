import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage/Landing";
import Home from "./Components/Home/Home";
import { PokemonCreado } from "./Components/Create/Create";
import { PokeDetalles } from "./Components/DetallesPoke/Detalles";
import { Error404 } from "./Components/error404/error404";
import axios from "axios";
axios.defaults.baseURL = "https://deploy-production-0c8d.up.railway.app/";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/post" component={PokemonCreado} />
          <Route path="/pokemon/:id" component={PokeDetalles} />
          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
