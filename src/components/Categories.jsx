import React, {useState} from "react";
import PropTypes from "prop-types"

export const Categories = ({items})=>{
    const [classNameItems, setClassNameItems] = useState(null);

    let onSelected = (index) =>{
        setClassNameItems(index)
    };

    let onSelectedThe = (index) =>{
        setClassNameItems(index)
    };

        return (
            <div className="categories">
                <ul>
                    <li onClick={()=>onSelectedThe(null)} className={classNameItems === null && "active"}>Все</li>
                    {items.map((title, index)=>{
                        return <li onClick={()=>onSelected(index)} className={classNameItems === index ? "active" : null} key = {`${title}_${index}`}>{title}</li>
                    })}
                </ul>
            </div>
        )

};

Categories.propTypes = {
    items:PropTypes.array.isRequired
};

Categories.defaultProps = {
    items:[]
}