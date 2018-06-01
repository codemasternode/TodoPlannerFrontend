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





function dayInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

export default DateFormat