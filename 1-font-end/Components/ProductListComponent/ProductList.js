import React, { Component } from 'react';
import ListItem from './../ListItemComponent/ListItem'

class ProductList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">LIST</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Codex</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
};
export default ProductList;