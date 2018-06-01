import TodoModel from './TodoModel'

class DayTodoModel extends TodoModel {
    constructor(title, startsAt, endAt, date) {
        super(title)
        this.startsAt = startsAt
        this.endAt = endAt
        this.date = date
    }
}

export default DayTodoModel