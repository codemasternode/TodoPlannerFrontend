import TodoModel from './TodoModel'

class MonthTodoModel extends TodoModel {
    constructor(_id, title, month, year) {
        super(_id, title)
        this.month = month
        this.year = year
    }
}