import React from 'react'

const Cell = ({ data }) => {
    return (
        <div className="cell">
            {data.title}
        </div>
    )
}

export default Cell