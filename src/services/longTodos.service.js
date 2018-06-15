import axios from 'axios'
import { rootURL } from '../consts'

export const longTodosService = {
    fetch
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