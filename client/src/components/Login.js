import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Login({ onLogin }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate()

    const [login, setLogin] = useState(true)

    const handleLogin = (e) => {
        e.preventDefault()

        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(data => {

                        onLogin(data)
                        navigate("/")
                    })
                } else {
                    res.json().then(errors => setErrors(errors))
                }
            })
    }

    const handleChangeUsername = e => setUsername(e.target.value)
    const handleChangePassword = e => setPassword(e.target.value)

    return (
        <div>
            <h2>Login:</h2>

            <form onSubmit={handleLogin}>

                <div className='user-box'>

                    <label>Username: </label>
                    <input
                        type="text" name='' required='' onChange={handleChangeUsername} value={username} placeholder='username'
                    />

                    <label>Password: </label>
                    <input
                        type="password" onChange={handleChangePassword} value={password} placeholder='password'
                    />

                    <button onClick={() => setLogin(false)}>LOGIN
                    </button >

                    <button className='submit '>
                        <Link className="signup" to="/Signup">
                            Signup
                        </Link>

                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login;