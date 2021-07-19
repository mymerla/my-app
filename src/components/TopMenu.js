import React, {useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'

import Logo from './Logo'
import userContext from '../context/MyContext' 
import './TopMenu.css'

export const TopMenu = () => {
    const {userState, userDispatch} = useContext(userContext)
    const condition = userState.memclid !== "" && userState.memclem !== ""
    const [cookies, setCookie, removeCookie] = useCookies()

    const handleLogout = () => {
        removeCookie('memclem')
        removeCookie('memclid')
    }

    useEffect(() => {
        if(!cookies.memclid && !cookies.memclem){
            const data = {
                memclid: '',
                memclem: ''
            }
            
            userDispatch({ type: 'setData', payload: data })
        }
    }, [cookies])

    return (
        <div className="top-menu">
            <div className="wrapper">
                <div className="left-section">
                    <Logo color="purple" />
                </div>
                <div className="right-section">
                    { condition ? (
                        <>
                            <h2 className="link-menu">{userState.memclem}</h2>
                            <h2 className="link-menu" onClick={handleLogout}>Cerrar sesión</h2>
                        </>
                    ) : (
                        <>
                            <Link className="link-menu" to="/login">Iniciar sesión</Link>
                            <Link className="link-menu" to="/register">Registrarme</Link>
                        </>
                    )}
                    
                </div>
            </div>
        </div>
    )
}
