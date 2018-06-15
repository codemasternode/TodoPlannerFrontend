import React from 'react'
import $ from 'jquery'

class Content extends React.Component {



    blur(e) {
        console.log(e)
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
        console.log(content)
        return (
            <div className="row-content" onMouseDown={this.click.bind(this)} id={`row-${this.props.index}`}>
                {content.length != 0 && content[0].title}
            </div>
        )
    }
}

export default Content