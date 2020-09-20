import React, {useCallback, useEffect, useState} from "react";

import {useHttp} from "../hooks/http.hook";
import SortPopup from "../components/SortPopup";
import {PizzaBlock} from "../components/PizzaBlock";
import {Categories} from "../components/Categories";

export const Home = () =>{
    const {request} = useHttp();
    const [items, setItems] = useState([]);
    const itemsName = ["Мясные", "Вегетарианская", "Гриль", "Острые","Закрытые"];
    const dataItems = useCallback(async ()=>{
       try{
           let data = await request("http://localhost:3000/db.json", "GET", null, {});
           return data
       }catch (e) {
           console.log(e)
       }
    },[]);

    useEffect( ()=>{
        let getItemsPizza = async () =>{
            let data =  await dataItems();
            setItems(data.pizzas)
        };
        getItemsPizza()
    },[]);
    return (
        <div className="container">
            <div className="content__top">
                <Categories items ={itemsName}/>
                <SortPopup />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map(pizza =>{
                    return <PizzaBlock key={pizza.id} {...pizza}/>
                })}

            </div>
        </div>
    )
}




