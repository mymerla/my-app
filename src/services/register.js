import axios from "axios"

export default function register({ lastName, name, password, email}){

    const data = {
        name: name,
        lastName: lastName,
        email: email,
        password: password
    }

    return axios.post('http://localhost:3001/api/register/myapp', data)
}