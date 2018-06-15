import axios from 'axios'
import { rootURL } from '../consts'

export const longTodosService = {
    fetch,
    update
}

function fetch() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'x-auth': localStorage.getItem('tokenAuth')
        }
    }

    return axios(`${rootURL}/allLongTodos`, requestOptions)
}

function update(values) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'x-auth': localStorage.getItem('tokenAuth')
        }
    }

    return axios(`${rootURL}/updateLongTodo`, requestOptions)
}