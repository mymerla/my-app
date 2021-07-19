import {useContext} from "react"  
import userContext from "../context/MyContext"

export default function HomePage() {
    const { userState } = useContext(userContext)
    const condition = userState.memclid !== "" && userState.memclem !== ""

    return(
        <>
            {condition ? (
                <h1>El usuario está loggeado</h1> 
            ) : (
                <h2>El usuario no está loggeado</h2>
            )} 
        </>
    )
}