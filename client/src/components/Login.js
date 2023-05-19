import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
        <div class="main" >
            <p className="sign" align="center" >Sign in</p>

            <form className="form1" onSubmit={handleLogin}>
                <div className='user-box'>

                    <input className="un"
                        type="text" name='' required='' onChange={handleChangeUsername} value={username} placeholder='username'
                    />

                    <input className="pass"
                        type="password" onChange={handleChangePassword} value={password} placeholder='password'
                    />

                    <button class="submit" align="center"
                        onClick={() => setLogin(false)}>Sign in
                    </button >

                    <button className="forgot" align="center" >
                        <Link className="signup" to="/Signup">
                            Don't have account? Signup
                        </Link>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login;