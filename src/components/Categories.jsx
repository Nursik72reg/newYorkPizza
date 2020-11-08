import React, {useMemo, useState} from "react";
import PropTypes from "prop-types"

export const Categories = React.memo(({categoryItem,items,onClickItem})=>{
    const [classNameItems, setClassNameItems] = useState(null);

    let onSelected = (index) =>{
        setClassNameItems(index)
        onClickItem(index)
    };

    return (
        <div className="categories">
            <ul>
                <li onClick= {()=>onSelected(null)}
                    className= {classNameItems === null && "active"}>Все</li>
                {items.map((title, index)=>
                    <li onClick= {()=>onSelected(index)}
                        className= {classNameItems === index ? "active" : null}
                        key = {`${title}_${index}`}>{title}</li>
                )}
            </ul>
        </div>
    )

})

Categories.propTypes = {
    items:PropTypes.array.isRequired
};

Categories.defaultProps = {
    items:[]
}