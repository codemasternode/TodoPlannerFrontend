import React from 'react'


const Day = ({ day }) => {
    return
    <div className="day-header">
        <div>{day.title}</div>
        <div>{day.startsAt - day.endAt}</div>
    </div>
}

export default Day