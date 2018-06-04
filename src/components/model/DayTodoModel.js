import TodoModel from './TodoModel'

class DayTodoModel extends TodoModel {
    constructor(_id, title, startsAt, endAt, date) {
        super(_id, title)
        this.startsAt = startsAt
        this.endAt = endAt
        this.date = date
    }
}

export default DayTodoModel