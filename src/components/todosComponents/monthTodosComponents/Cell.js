import React from 'react'

const Cell = ({ data }) => {
    return (
        <div className="cell">
            <h4>{data.title}</h4>
        </div>
    )
}

export default Cell