import React from 'react'
import $ from 'jquery'

class Content extends React.Component {



    blur(e) {
        console.log('dawaj')
    }

    click(e) {
        const row = $(`#row-${this.props.index}`)
        if (row[0].firstChild) {
            let replacement = $(document.createElement('textarea'));
            replacement.append(row[0].firstChild.data)
            replacement.blur(() => {
                console.log('sam nieiwem')
            })
            $(row).replaceWith(replacement)
        } else {
            $(row).replaceWith(`<textarea></textarea>`)
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