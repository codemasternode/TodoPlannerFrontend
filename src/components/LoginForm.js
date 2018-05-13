import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import loginUser from '../actions/login'
import $ from 'jquery'
import { withRouter } from 'react-router-dom'


class LoginForm extends React.Component {


    renderField(field) {
        const { meta: { touched, error } } = field
        const validation = `control ${touched && error ? 'danger' : ''}`

        return (
            <div>
                <label>{field.label}</label>
                <input type={field.type} className={validation} {...field.input} />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(e) {
        console.log(this.props)
        this.props.loginUser(e, () => {
            this.props.history.push('/dashboard')
        })
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} id="k">
                <Field type="text" label="Email" name="email" component={this.renderField} />
                <Field type="password" label="Hasło" name="password" component={this.renderField} />
                <div>
                    <button type="submit">Zaloguj</button>
                </div>
            </form>
        )
    }
}

function validate(values) {
    const errors = {}


    if (!values.email) {
        errors.email = "Pole jest wymagane!!!";

    } else {
        var monkey = "@";
        if (!values.email.includes(monkey)) {
            errors.email = "Proszę wprowadzić prawidłowy email"
        } else {
            const monkeyPos = values.email.indexOf(monkey);
            if (values.email.split(monkey)[0].length == 0 || values.email.slice(monkeyPos + 1).length == 0) {
                errors.email = "Proszę wprowadzić prawidłowy email"
            }
        }
    }
    if (!values.password) {
        errors.password = "Pole jest wymagane!!!";
    } 
    return errors;
}

function mapStateToProps(state) {
    return {
        loginResult: state.loginResult
    }
}



export default reduxForm({
    validate: validate,
    form: 'Login'
})(withRouter(connect(mapStateToProps, { loginUser })(LoginForm)))