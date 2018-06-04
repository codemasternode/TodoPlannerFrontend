import React from 'react'
import dashboardStyles from '../css/dashboard.css'
import CssModules from 'react-css-modules'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import TodoNav from './todosComponents/TodoNav'
import DayTodos from './todosComponents/DayTodos'
import MonthTodos from './todosComponents/MonthTodos'
import LongTodos from './todosComponents/LongTodos'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";



class Dashboard extends React.Component {
    render() {
        if (!this.props.loginResult.authenticated) {
            return <Redirect to="/login" />
        } 
        return (
            <div className="container">
                <TodoNav />
                <Route path="/dashboard/dayTodo" component={DayTodos} />
                <Route path="/dashboard/monthTodo" component={MonthTodos} />
                <Route path="/dashboard/longTodo" component={LongTodos} />

            </div>

        )
    }
}


function mapStateToProps(state) {
    return { loginResult: state.loginResult }
}

export default connect(mapStateToProps, undefined)(CssModules(Dashboard, dashboardStyles))