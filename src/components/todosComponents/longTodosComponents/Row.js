import React from 'react'
import Content from './Content'

const Row = ({ head, description, index }) => {
    return (
        <div className="row">
            <div className="row-head">{head}</div>
            <Content index={index} content={description} />
        </div>
    )
}

export default Row