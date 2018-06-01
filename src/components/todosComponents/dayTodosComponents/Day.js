import React from 'react'
import DateFormat from '../../helpers/DateFormat'


const Day = ({ data, that }) => {
    const day = new DateFormat(that.day, that.month, that.year)
    console.log(day)
    return (<div className="day">
        <h3>{that.day + ' ' + day.renderMonth()}</h3>
    </div>)
}

export default Day