import { useState, useContext } from "react"
import MyContext from '../context/MyContext'
import login from '../services/login'
import { useCookies } from 'react-cookie'
import "./Form.css"

export default function Form(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { userDispatch } = useContext(MyContext)
    const [cookies] = useCookies()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            email: cookies.memclem,
            token: cookies.memclid
        }

        userDispatch({ type: 'setData', payload: data })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="input-form"
                type="text"
                placeholder="Ingresa tu correo electrónico"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <input
                className="input-form"
                type="password"
                placeholder="Ingresa tu contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button className="button-login" type="submit">
                Iniciar sesión
            </button>
        </form>
    )
}