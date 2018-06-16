import React from 'react'
import $ from 'jquery'
import { connect } from 'react-redux'
import { updateLongTodo } from '../../../actions/longTodos'


class Content extends React.Component {

    blur(e) {
        const email = localStorage.getItem('user_email')
        if (email !== null || email != undefined) {
            this.props.updateLongTodo({ when: this.props.index, title: e, email })
        }

    }

    click(e) {
        const row = $(`#row-${this.props.index}`)
        let replacement = $(document.createElement('textarea'));
        $(replacement).blur((e) => {
            this.blur(e.target.value)
            $(replacement).replaceWith(row)
            row.append(e.target.value)
        })
        if (row[0].firstChild) {
            replacement.append(row[0].firstChild.data)
            $(row).replaceWith(replacement)
        } else {
            $(row).replaceWith(replacement)
        }

    }

    render() {
        const { content } = this.props
        return (
            <div className="row-content" onMouseDown={this.click.bind(this)} id={`row-${this.props.index}`}>
                {content.length != 0 && content[0].title}
            </div>
        )
    }
}

export default connect(undefined, { updateLongTodo })(Content)