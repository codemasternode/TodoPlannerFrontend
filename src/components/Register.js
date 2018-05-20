import React from 'react'
import registerStyles from '../css/register.css'
import CssModules from 'react-css-modules'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import registerUser from '../actions/register'



class Register extends React.Component {



    renderInput(field) {
        const { meta: { touched, error } } = field
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    type={field.type}
                    name={field.name}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.registerUser(values, () => {
            this.props.history.push('/login')
        })
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <div className="form-login">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} noValidate>
                    <Field
                        label="Email"
                        type="email"
                        name="email"
                        component={this.renderInput}
                    />
                    <Field
                        label="Imię"
                        type="text"
                        name="name"
                        component={this.renderInput}
                    />
                    <Field
                        label="Nazwisko"
                        type="text"
                        name="lastname"
                        component={this.renderInput}
                    />
                    <Field
                        label="Hasło"
                        type="password"
                        name="password"
                        component={this.renderInput}
                    />
                    <Field
                        label="Powtórz hasło"
                        type="confirmpassword"
                        component={this.renderInput}
                    />
                </form>
            </div>
        )
    }
}

function mapStateToProps({ register }) {
    return {
        register
    }
}

function validate(values) {
    const errors = {}

    if (!values.name) {
        errors.name = "Pole jest wymagane!!!"
    }
    if (!values.lastname) {
        errors.username = "Pole jest wymagane!!!"
    }

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
    } else {
        if (values.password.length < 6) {
            errors.password = "Hasło musi zawierać przynajmniej 6 znaków"
        }
    }
    if (!values.confirmpassword) {
        errors.confirmpassword = "Pole jest wymagane!!!";
    } else {
        if (values.password != values.confirmpassword) {
            errors.confirmpassword = "Hasła różnią się od siebie"
            errors.password = "Hasła różnią się od siebie"
        }
    }
    return errors;

}

export default reduxForm({
    form: 'register',
    validate: validate
})(connect(mapStateToProps, { registerUser })(CssModules(Register, registerStyles)))