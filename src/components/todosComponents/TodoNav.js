import React from 'react'
import NavItem from './TodoNavItem'

class TodoNav extends React.Component {
    render() {
        return (
            <div className="todoNav">
                <NavItem text="Dzienny Planner" path="/dashboard/dayTodos"/>
                <NavItem text="Miesięczny Planner" path="/dashboard/monthTodos"/>
                <NavItem text="Długoterminowy Planner" path="/dashboard/longTodos"/>
            </div>
        )
    }


}



export default TodoNav