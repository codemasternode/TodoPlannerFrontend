import React from 'react'
import Content from './Content'

const Row = ({ head, description }) => {
    return (
        <div className="row">
            <div className="row-head">{head}</div>
            <Content content={description} />
        </div>
    )
}

export default Row