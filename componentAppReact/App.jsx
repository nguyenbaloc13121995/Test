import React, { Component } from 'react';
import Membercomponent from './Membercomponent.jsx'
import Projectcomponent from './Projectcomponent.jsx'
class App extends Component {
    render() {
      return (
        <div className="container">
          <div className="text-center">
            <h1>Quản Lý Project</h1>
            <hr />
          </div>
          <div className="row">
            <Membercomponent/>
            <Projectcomponent/>
          </div>
        </div>
      );
    }
};
export default App;