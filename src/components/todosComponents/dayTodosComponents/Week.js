import React from 'react'
import Day from './Day'
import _ from 'lodash'
import { getDays } from '../../helpers/DateFormat'

const Week = ({ data, now, add }) => {
    const array = []
    if (now && add) {
        var days = getDays(now, add)
    }
    if (data) {
        days.forEach((ele) => {
            var match = _.filter(data, (obj) => {
                return ele.day == obj.date.day
            })
            array.push(<Day data={match} that={ele} />)
        })
        console.log(array)
    }
    return <div>War</div>
}



export default Week