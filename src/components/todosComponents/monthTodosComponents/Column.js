import React from 'react'
import Cell from './Cell'
import { connect } from 'react-redux'

class Column extends React.Component {
    constructor() {
        super()
    }
    renderDate() {
        const { data } = this.props
        if (data) {
            return data.map((value, key) => {
                return <Cell key={key} data={value} />
            })
        }
        return <div>Trwa wczytywanie...</div>
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
                    <div className="plus">
                        <i className="fas fa-plus fa-3x"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Column