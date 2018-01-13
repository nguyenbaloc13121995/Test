import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './../../App.css'

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'Product List',
        to: '/product-list',
        exact: false
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExac }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExac}
            children={({ match }) => {
                var active = match ? 'active' : ''
                return (
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                )
            }}
        />
    )
}
class Menu extends Component {
    showMenu = (menus)=>{
        var result = null;
        if(menus.length>0){
             result = menus.map((r,i)=>{
                 return (
                     <MenuLink
                        key ={i}
                        label={r.name}
                        to={r.to}
                        activeOnlyWhenExact={r.exact}
                     />
                 );
             })
        }
        return result
    }
    render() {
        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand">Tranning</a>
                <ul className="nav navbar-nav">
                    {this.showMenu(menus)}
                </ul>
            </div>
        );
    }
};
export default Menu;