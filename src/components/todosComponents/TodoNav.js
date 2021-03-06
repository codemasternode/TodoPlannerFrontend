import React from 'react'
import NavItem from './TodoNavItem'

class TodoNav extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="todo-nav">
                <ul>
                    <NavItem text="Dzienny Planner" to="/dashboard/dayTodo" />
                    <NavItem text="Miesięczny Planner" to="/dashboard/monthTodo" />
                    <NavItem text="Długoterminowy Planner" to="/dashboard/longTodo" />
                </ul>
            </div>
        )
    }
}



export default TodoNav