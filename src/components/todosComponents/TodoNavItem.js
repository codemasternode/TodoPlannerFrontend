import React from 'react'
import { Link } from 'react-router-dom'

const TodoNavItem = props => {
    return (<li className="todo-nav-item">
        <Link to={props.to}>{props.text}</Link>
    </li>)
}


export default TodoNavItem