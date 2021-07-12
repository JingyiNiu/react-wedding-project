import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/nav/nav.component";
import Footer from "./components/footer/footer.component";
import Home from "./pages/home/home.component";
import Details from "./pages/details/details.component";

import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/details' exact component={Details} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
