import React from 'react'
import { Link } from 'react-router-dom'


class TodoNav extends React.Component {
    render() {
        return (
            <div className="todoNav">
                {TodoNavItem({path: '/dayTodos',text: 'Plan dzienny'})}
                {TodoNavItem({path: '/monthTodos',text: 'Plan misięczny'})}
                {TodoNavItem({path: '/longTodos',text: 'Plan długoterminowy'})}
            </div>
        )
    }
    

}

const TodoNavItem = props => {
    return
    (<div class="todoNav-item">
        <Link to={props.path}>
            {props.text}
        </Link>
    </div>)
}


export default TodoNav