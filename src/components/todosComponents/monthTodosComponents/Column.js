import React from 'react'
import Cell from './Cell'

const Column = ({ week, data, index }) => {

    return (
        <div className="column">
            <div className="head">
                <h3>Tydzień {index + 1}</h3>
            </div>
            <div className="data">
                {data.map((value, key) => {
                    return <Cell key={key} data={value} />
                })}
            </div>
        </div>
    )
}

export default Column