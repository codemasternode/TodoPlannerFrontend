import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'




class LoginForm extends React.Component {


    renderField(field) {
        const { meta: { touched, error } } = field
        const validation = `control ${touched && error ? 'danger' : ''}`

        return (
            <div>
                <label>{field.label}</label>
                <input type="text" className={validation} name={field.name} />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    render() {
        return (
            <form>
                <Field label="Email" name="email"/>
                <Field label="Password" name="password"/>
            </form>
        )
    }
}

function validate(values) {

}

function mapStateToProps(state) {
    loginResult: state.loginResult
}

export default reduxForm({
    validate: validate,
    form: 'Login'
})(connect(mapStateToProps, { loginUser })(LoginForm))