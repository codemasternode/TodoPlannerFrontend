import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import SubChild from './SubChild'
import SubChild2 from './SubChild2'

class Child extends React.Component {
    render() {
        return
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/child1">Child1</Link></li>
                    <li><Link to="/child2">child2</Link></li>
                </ul>
                <Switch>
                    <Route path="/subchild1" component={SubChild} />
                    <Route path="/subchild2" component={SubChild2} />
                </Switch>
            </div>
        </BrowserRouter>
    }
}

export default Parent