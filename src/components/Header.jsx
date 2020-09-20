import React from "react";
import logo from "../assets/img/pizza-logo.svg";
import {Button} from "./Button";
import {Link} from "react-router-dom";

export const Header = () =>(
    <div className="header">
        <div className="container">
            <Link to={"/"}>
                <div className="header__logo">
                    <img width="38" src={logo} alt="Pizza logo"/>
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
            </Link>
            <div className="header__cart">
                <Link to={"/basket"}>
                    <Button/>
                </Link>

            </div>
        </div>
    </div>
)