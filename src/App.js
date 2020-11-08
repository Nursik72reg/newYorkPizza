import React, {useCallback, useEffect} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import "./scss/app.scss"
import {Header} from "./components/Header";
import {Basket} from "./pages/Basket";
import Home from "./pages/Home";



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
