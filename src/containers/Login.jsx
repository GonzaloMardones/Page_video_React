import React, {useState} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { loginRequest } from '../actions'
import Header from '../components/Header'
import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'
import '../assets/styles/components/Login.scss'

const Login = props => {
    //estado del componente
    const [form, setValues] = useState({
        email: ''

    })

    //preparar form para manejar los cambios cada vez que hacemos cambio en los input
    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value//obtengo de forma dinamica lo que traigo de mi input y lo cambio
        })
    }

    // una vez que capturamos la info, esta debe ser enviada donde nosotros necesitamos
    const handleSubmit = event =>{
        event.preventDefault() //matamos el comportamiento de HTML
        props.loginRequest(form)
        props.history.push('/')// si cumplio con los datos lo envio al home
    }

    return(
   
    <>
    <Header isLogin/>
    <section className="login">
        <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
            <input name="email" className="input" type="text" placeholder="Correo" onChange={handleInput}/>
            <input name="password"  className="input" type="password" placeholder="Contraseña" onChange={handleInput}/>
            <button className="button">Iniciar sesión</button>
            <div className="login__container--remember-me">
            <label>
                <input type="checkbox" id="cbox1" value="first_checkbox"/>Recuérdame
            </label>
            <a href="/">Olvidé mi contraseña</a>
            </div>
        </form>
        <section className="login__container--social-media">
            <div><img src={googleIcon}/> Inicia sesión con Google</div>
            <div><img src={twitterIcon}/> Inicia sesión con Twitter</div>
        </section>
        <p className="login__container--register">
            No tienes ninguna cuenta {' '}
            <Link to="/register">
                Regístrate
            </Link>
        </p>
        </section>
    </section>
    </>
    )
}

const mapDispatchToProps = {
    loginRequest
}

export default connect(null, mapDispatchToProps)(Login)