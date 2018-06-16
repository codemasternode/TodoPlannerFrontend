import React from 'react';
import Row from './longTodosComponents/Row'
import { fetchLongTodos } from '../../actions/longTodos'
import { connect } from 'react-redux'
import _ from 'lodash'
import DateFormat from '../helpers/DateFormat';


class LongTodos extends React.Component {

    componentDidMount() {
        this.props.fetchLongTodos()

    }

    renderRows() {
        const array = []
        const { longTodos } = this.props
        for (let i = 0; i <= 11; i++) {
            const filtered = _.filter(longTodos, (item) => {
                return item.when === i
            })
            const month = new DateFormat(undefined, i, new Date().getFullYear()).renderMonth()

            array.push(<Row key={i} index={i} description={filtered} head={month} />)
        }
        return array
    }

    render() {
        return <div className="long-todos">
            {this.renderRows()}
        </div>
    }
}

function mapStateToProps({ longTodos }) {
    return {
        longTodos
    }
}

export default connect(mapStateToProps, { fetchLongTodos })(LongTodos)