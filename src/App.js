import React, {useCallback, useEffect} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {useDispatch} from "react-redux";

import "./scss/app.scss"
import {Header} from "./components/Header";
import {Basket} from "./pages/Basket";
import Home from "./pages/Home";
import {useHttp} from "./hooks/http.hook";
import {addPizzas} from "./store/actions/Pizzas";


function App() {
    const {request} = useHttp();
    const dispatch = useDispatch();

    const dataItems = useCallback(async ()=>{
        try{
            let data = await request("http://localhost:3001/pizzas", "GET", null, {});
            return data
        }catch (e) {
            console.log(e)
        }
    },[]);

    window.test =  () => {
        let getItemsPizza = async () =>{
            let data =  await dataItems();
            dispatch(addPizzas(data.pizzas))
        };
        getItemsPizza()
    };

    useEffect( ()=>{
        let getItemsPizza = async () =>{
            let data =  await dataItems();
            dispatch(addPizzas(data))
        };
        getItemsPizza()
    },[]);


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
