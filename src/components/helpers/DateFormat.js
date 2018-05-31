class DateFormat {
    constructor(day, month, year) {
        this.day = day
        this.month = month
        this.year = year
    }

    increamentDays(inc, date) {
        const dayInMonth = dayInMonth(date.year, date.month)
        return new DateFormat()
    }

}


function dayInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}