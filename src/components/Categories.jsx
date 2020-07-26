import React from "react";

class Categories extends React.Component{
    state= {
      className:3
    };

    onSelected(index){
        this.setState({
            className:index
        })
        console.log(index)
    }

    render() {
        let {items} = this.props;
        return (
            <div className="categories">
                <ul>
                    <li>Все</li>
                    {items.map((title, index)=>{
                        return <li onClick={()=>this.onSelected(index)} className={this.state.className === index ? "active" : null} key = {`${title}_${index}`}>{title}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default Categories