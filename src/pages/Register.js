import { useState} from "react"
import "./Form.css"
import register from '../services/register'

export default function RegisterPage(){
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            if(password === confirmPass){
                const response = await register({ name, lastName, email, password })
                console.log(response)
            }
        }catch(e){
            console.log(e)
        }
    }

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <input
                    className="input-form"
                    type="text"
                    placeholder="Ingresa tu nombre"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    className="input-form"
                    type="text"
                    placeholder="Ingresa tu apellido"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                />
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
                <input
                    className="input-form"
                    type="password"
                    placeholder="Confirma tu contraseña"
                    onChange={(e) => setConfirmPass(e.target.value)}
                    value={confirmPass}
                />
                <button className="button-login" type="submit">
                    Registrarme
                </button>
            </form>
        </div>
    )
}
