import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

//pages
import Home from "./pages/Home";
import Categories from './pages/Categories';
import Quizz from "./pages/Quizz";
import Question from "./pages/Question";

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {

  return (
    <Router>
        <div className="App"><Navbar/></div>
        
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" component={Categories} />
        <Route path="/categories/:slug" component={Quizz} />
        <Route path="/quizzs" component={Quizz} />
        <Route path="/questions/:slug" component={Question} />
      </Switch> 
      
      <div><Footer/></div>

    </Router>
  );
}

export default App;