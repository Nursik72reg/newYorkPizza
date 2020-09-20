import React from 'react';
import "./scss/app.scss"
import {Header} from "./components/Header";
import {BrowserRouter, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Basket} from "./pages/Basket";

function App() {

  return (
      <BrowserRouter>
      <div className="wrapper">
       <Header/>
        <div className="content">
          <Route path = "/" component = {Home} exact/>
          <Route path = "/basket" component = {Basket} exact/>
        </div>
      </div>
      </BrowserRouter>
);
}

export default App;
