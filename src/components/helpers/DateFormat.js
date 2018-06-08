import Week from './Week'

class DateFormat {
    constructor(day, month, year) {
        this.day = day
        this.month = month
        this.year = year
    }

    renderMonth() {
        if (this.month == 0) {
            return 'styczeń'
        } else if (this.month === 1) {
            return 'luty'
        }
        else if (this.month === 2) {
            return 'marzec'
        }
        else if (this.month === 3) {
            return 'kwiecień'
        }
        else if (this.month === 4) {
            return 'maj'
        }
        else if (this.month === 5) {
            return 'czerwiec'
        }
        else if (this.month === 6) {
            return 'lipiec'
        }
        else if (this.month === 7) {
            return 'sierpień'
        }
        else if (this.month === 8) {
            return 'wrzesień'
        }
        else if (this.month === 9) {
            return 'październik'
        }
        else if (this.month === 10) {
            return 'listopad'
        }
        else if (this.month === 11) {
            return 'grudzień'
        } else {
            return 'grudzień'
        }
    }

    countWeeks(now) {
        console.log(now)
        const dayMonth = dayInMonth(this.year, this.month)
        console.log(dayMonth)
        let firstDay = new Date(this.year, this.month, 1, 12, 12, 12)
        firstDay = firstDay.getDay()

        let array = []
        let counter = 0
        for (let i = 1; i < dayMonth - 1; i++) {
            firstDay = firstDay + 1
            let suma = firstDay % 7

            if (suma == 0 || i == dayMonth - 2) {
                array.push(counter)
                counter = 0
            }
            counter++
            console.log(suma)
        }
        console.log(array)


    }

    increamentDays(inc, { day, month, year }) {
        this.month = month
        this.year = year
        this.day = day
        const dayOfMonth = dayInMonth(year, month)
        if (day + inc > dayOfMonth) {
            let roznica = dayOfMonth - day
            inc = inc - roznica - 1
            this.day = inc
            this.month += 1
            if (this.month > 11) {
                this.month = 0
                this.year += 1
            }
        } else {
            this.day += inc
        }
        return new DateFormat(this.day, this.month, this.year)
    }
}

export function getDays(nowTime, addTime) {
    const days = []
    if (addTime.day - nowTime.day < 0) {
        const dayOfMonth = dayInMonth(nowTime.year, nowTime.month)
        let inc = dayOfMonth - nowTime.day
        for (let i = nowTime.day; i <= dayOfMonth; i++) {
            days.push(new DateFormat(i, nowTime.month, nowTime.year))
        }
        for (let i = 1; i <= addTime.day; i++) {
            days.push(new DateFormat(i, addTime.month, addTime.year))
        }
    } else {
        for (let i = nowTime.day; i <= addTime.day; i++) {
            days.push(new DateFormat(i, nowTime.month, nowTime.year))
        }
    }

    return days
}



function dayInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

export default DateFormat