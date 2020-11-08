import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";


import SortPopup from "../components/SortPopup";
import {PizzaBlock} from "../components/pizzaBlock/PizzaBlock";
import {Categories} from "../components/Categories";
import {setCategory, setSortBy} from "../store/actions/Filters";
import {MyLoader} from "../components/pizzaBlock/LoaderPizzaBlock";
import {setPizzas} from "../store/actions/Pizzas";
import {newAddPizzaCart} from "../store/actions/Cart";


const itemsName = ["Мясные", "Вегетарианская", "Гриль", "Острые","Закрытые"];
const sortItems = [
    {name: "Популярности", type: "rating"},
    {name:  "Цене", type: "price"},
    {name: "Алфавиту", type: "name"},
];
const Home = () =>{
    const dispatch = useDispatch();
    const {pizzas, sortBy, category, loading, obj} = useSelector((state)=>{
        return {
            pizzas: state.pizzas.pizzas,
            category: state.filters.category,
            loading: state.pizzas.loading,
            sortBy: state.filters.sortBy,
            obj: state.cart.obj
        }
    });

    useEffect( ()=>{
        dispatch(setPizzas(category, sortBy))
    },[category, dispatch, sortBy]);

    let clickSetCategory = useCallback((index)=>{
        dispatch(setCategory(index))
    },[dispatch]);

    let  onClickSort = useCallback((typeSort)=>{
        dispatch(setSortBy(typeSort))
    },[dispatch]);

    const handleAddPizzaToCart = (obj) => {
        dispatch(newAddPizzaCart(obj))
    };
    console.log(obj)
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    categoryItem = {category}
                    onClickItem = {clickSetCategory}
                    items = {itemsName} />
                <SortPopup
                    onClickSort = {onClickSort}
                    sortItems = {sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
               {!loading ? pizzas?.map(pizza =>{
                    return <PizzaBlock onClickAddPizzaCart={handleAddPizzaToCart} key={pizza.id} {...pizza}/>
                }) : Array(10).fill(<MyLoader/>)}
            </div>
        </div>
    )
};

export default Home;




