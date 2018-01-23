import React, { Component } from 'react';
import {Link } from 'react-router-dom'
class ListItem extends Component {
    onDelete=(id)=>{
        if(confirm("Do you want delete")){//eslint-disable-line
            this.props.onDelete(id)
        }
    }
    render() {
        var { products, index } = this.props
        var classLabel = products.status ? "WareHouse" : "SoldOut"
        var className = products.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{products.id}</td>
                <td>{products.name}</td>
                <td>{products.price}</td>
                <td>
                    <span className={`label label-${className}`}>{classLabel}</span>
                </td>
                <td>
                    <Link to={`/product/${products.id}/edit`} className="btn btn-success">EDIT</Link>
                    <button type="button" className="btn btn-warning" onClick={()=>this.onDelete(products.id)}>DELETE</button>
                </td>
            </tr>
        );
    }
};
export default ListItem;