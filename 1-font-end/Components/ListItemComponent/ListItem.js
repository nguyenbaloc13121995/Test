import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        var { products, index } = this.props
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{products.id}</td>
                <td>{products.name}</td>
                <td>{products.price}</td>
                <td>
                    <span className="label label-warning">WareHouse</span>
                </td>
                <td>
                    <button type="button" className="btn btn-success">EDIT</button>
                    <button type="button" className="btn btn-warning">DELETE</button>
                </td>
            </tr>
        );
    }
};
export default ListItem;