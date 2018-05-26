import React from 'react'
import dashboardStyles from '../css/dashboard.css'
import CssModules from 'react-css-modules'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import TodoNav from './todosComponents/TodoNav'
import DayTodos from './todosComponents/DayTodos'
import MonthTodos from './todosComponents/MonthTodos'
import LongTodos from './todosComponents/LongTodos'


class Dashboard extends React.Component {




    render() {
        if (!this.props.loginResult.authenticated) {
            return <Redirect to="/login" />
        }
        return (
            <BrowserRouter>
                <div>
                    <TodoNav />
                    <Switch>
                        <Route path="/dayTodos" exact component={DayTodos} />
                        <Route path="/monthTodos" component={MonthTodos} />
                        <Route path="/monthTodos" component={LongTodos} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

function mapStateToProps(state) {
    return { loginResult: state.loginResult }
}

export default connect(mapStateToProps, undefined)(CssModules(Dashboard, dashboardStyles))