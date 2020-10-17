import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";


import SortPopup from "../components/SortPopup";
import {PizzaBlock} from "../components/PizzaBlock";
import {Categories} from "../components/Categories";
import {setCategory} from "../store/actions/Filters";


const itemsName = ["Мясные", "Вегетарианская", "Гриль", "Острые","Закрытые"];
const sortItems = [
    {name: "Популярности", type: "popular"},
    {name:  "Цене", type: "price"},
    {name: "Алфавиту", type: "alphabet"},
]
const Home = () =>{
    const dispatch = useDispatch();
    const {pizzas,category} = useSelector((state)=>{
        return {
            pizzas: state.pizzas.pizzas,
            category: state.filters.category
        }
    });

    let clickSetCategory = useCallback((index)=>{
        dispatch(setCategory(index))
    },[category]);



    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem = {clickSetCategory}
                    items = {itemsName} />
                <SortPopup
                    sortItems = {sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas?.map(pizza =>{
                    return <PizzaBlock key={pizza.id} {...pizza}/>
                })}

            </div>
        </div>
    )
};

export default Home;




