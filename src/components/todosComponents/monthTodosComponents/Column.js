import React from 'react'
import Cell from './Cell'
import { connect } from 'react-redux'
import { addMonthTodo } from '../../../actions/monthTodos'
import NewMonthTodo from './NewMonthTodo'

class Column extends React.Component {
    constructor() {
        super()
        this.state = {
            render: false
        }
        this.renderDate = this.renderDate.bind(this)
        this.addNewTodo = this.addNewTodo.bind(this)
        this.add = this.add.bind(this)
    
    }

    componentWillReceiveProps(nextProps) {
        if (this.props != nextProps) {
            this.setState({
                data: nextProps.data
            })
        }

    }

    renderDate() {
        if (this.props.data.length != 0) {
            const { data } = this.state
            if (data != null || data != undefined) {
                return data.map((value, key) => {
                    return <Cell key={key} data={value} />
                })
            }
        }

    }
    addNewTodo(e) {
        this.setState({
            render: true
        })
    }

    add(value) {
        console.log(value)
    }

    renderAdd() {
        return <NewMonthTodo info={this.props.week} add={(e) => this.add(e)} />
    }

    render() {
        const { week, index } = this.props
        return (
            <div className="column">
                <div className="head">
                    <h3>Tydzień {index + 1}</h3>
                </div>
                <div className="data">
                    {this.renderDate()}
                    {this.state.render ? this.renderAdd() : <div></div>}
                    <div className="plus" onMouseDown={this.addNewTodo}>
                        <i className="fas fa-plus fa-3x"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { addMonthTodo })(Column)