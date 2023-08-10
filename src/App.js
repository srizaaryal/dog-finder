import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import RouteList from "./RouteList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RouteList />
      </BrowserRouter>
    </div>
  );
}

export default App;
