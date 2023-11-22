import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import ScrollingText from "./components/ScrollingText";

import "./App.css";

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <ScrollingText />
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  </div>
);

export default App;
