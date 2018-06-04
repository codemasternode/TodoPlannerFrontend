import React from 'react'
import Day from './Day'
import _ from 'lodash'
import { getDays } from '../../helpers/DateFormat'

const Week = ({ data, now, add }) => {
    const array = []
    if (data) {
        var days = getDays(now, add)
        days.forEach((ele, index) => {
            var match = _.filter(data, (obj) => {
                return ele.day == obj.date.day
            })
            array.push(<Day key={index} data={match} that={ele} />)
        })
        return array.map(item => {
            return item;
        });
    }else{
        return <div>Trwa wczytywanie...</div>
    }

}

export default Week