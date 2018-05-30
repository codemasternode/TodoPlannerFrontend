import React from 'react'
import Day from './Day'

const Week = ({ data }) => {
    const days = []
    data.forEach(element => {
        days.push(<Day data={data[element]} />)
    })
    return days
}

export default Week