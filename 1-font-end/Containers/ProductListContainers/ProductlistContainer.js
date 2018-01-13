import React, { Component } from 'react';
import ListItem from './../../Components/ListItemComponent/ListItem'
import ProductList from './../../Components/ProductListComponent/ProductList'
import { actFetchProductRequest } from './../../Actions/index'
import { connect } from 'react-redux'
import axios from 'axios'
import apiCaller from './../../utils/apiCaller'
class ProductListContainer extends Component {
    componentDidMount() {
        this.props.FetchProduct()
    }
    showContent = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((r, i) => {
                return <ListItem
                    key={i}
                    index={i}
                    products={r}
                />
            })
        }
        return result;
    }
    render() {
        var { products } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-default mb-10">Add Product</button>
                <ProductList>
                    {this.showContent(products)}
                    {/* <ListItem/> */}
                </ProductList>
            </div>
        );
    }
};
const mapStateProps = state => {
    return {
        products: state.ProductReducer
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        FetchProduct: () => {
            dispatch(actFetchProductRequest())
        }
    }
}
export default connect(mapStateProps, mapDispatchToProps)(ProductListContainer);
