import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Child from './Child';
import Child2 from './Child2';

class Parent extends React.Component {
    render() {
        return
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/child1">Child1</Link></li>
                    <li><Link to="/child2">child2</Link></li>
                </ul>
                <Switch>
                    <Route path="/child1" component={Child} />
                    <Route path="/child1" component={Child2} />
                </Switch>
            </div>
        </BrowserRouter>
    }
}

export default Parent;