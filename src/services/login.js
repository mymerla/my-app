import axios from "axios"

export default function login(email, password){

    const data = {
        email: email,
        password: password
    }

    return axios.post('http://localhost:3001/api/login', data)
}