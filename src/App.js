import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Home from "./pages/home/home.component";
import Details from "./pages/details/details.component";

import Test from "./pages/test";

import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/details/:id' component={Details} />
        <Route path='/test' component={Test} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
