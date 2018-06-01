class DateFormat {
    constructor(day, month, year) {
        this.day = day
        this.month = month
        this.year = year
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