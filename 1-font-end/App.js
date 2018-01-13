import React, { Component } from 'react';
import Menu from './Components/MenuComponent/Menu'
import ProductList from './Components/ProductListComponent/ProductList'
import ProductListContainer from './Containers/ProductListContainers/ProductlistContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './Router'
class App extends Component {
    showContent = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((r, i) => {
                return <Route
                    key={i}
                    path={r.path}
                    exact={r.exact}
                    component={r.main}
                />
            })
        }
        return <Switch>{result}</Switch>
    }
    render() {
        return (
            <Router>
                <div>
                    <Menu />
                    <div className="container">
                        <div className="row">
                        </div>
                        {this.showContent(routes)}
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
