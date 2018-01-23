import React, { Component } from 'react';
import { addProductRequest, getEditProductRequest,actUpdateProductRequest } from './../../Actions/index'
import { connect } from 'react-redux'
class ActionContainers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            txtname: '',
            txtprice: '',
            txtcb: '',
        }
    }
    onChange = (e) => {
        var target = e.target
        var name = target.name
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }
    onSubmit = (e) => {
        var { id, txtname, txtprice, txtcb } = this.state;
        var { history } = this.props
        var product = {
            id: id,
            name: txtname,
            price: txtprice,
            status: txtcb
        }
        e.preventDefault();
        if (id) {
            this.props.onUpdateProduct(product)
            history.goBack();
        }
        else {
            this.props.AddProduct(product)
            history.goBack();
        }
    }
    componentDidMount() {
        var { match } = this.props
        if (match) {
            var id = match.params.id
            this.props.GetProductEdit(id)
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.ItemsEditting) {
            var { ItemsEditting } = nextProps
            this.setState({
                id: ItemsEditting.id,
                txtname: ItemsEditting.name,
                txtprice: ItemsEditting.price,
                txtcb: ItemsEditting.status,
            })
        }
    }
    render() {
        var { txtname, txtprice, txtcb } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSubmit} method="post">
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" className="form-control" name="txtname"
                            value={txtname}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label >Price</label>
                        <input type="text" className="form-control" name="txtprice"
                            value={txtprice}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label >Status :
                             <input type="checkbox" name="txtcb"
                                value={txtcb}
                                onChange={this.onChange}
                                checked={txtcb} />
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary" >Save</button>
                </form>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        ItemsEditting: state.ItemsEditting
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        AddProduct: (product) => {
            dispatch(addProductRequest(product))
        },
        GetProductEdit: (id) => {
            dispatch(getEditProductRequest(id))
        },
        onUpdateProduct :(product)=>{
            dispatch(actUpdateProductRequest(product))
        }   
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ActionContainers);