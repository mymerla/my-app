import logoPurple from './guiahtv-logo-purple.png'
import logoBlue from './guiahtv-logo-blue.png'
import { Link } from 'react-router-dom'
import './Logo.css'

export default function Logo({ color }){
    const src = color === 'purple' ? logoPurple : logoBlue

    return (
        <Link to="/">
            <img className="logo" src={src} alt="Logo de guiah tv" />
        </Link>
    )
}