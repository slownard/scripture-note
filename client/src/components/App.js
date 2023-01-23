import { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import Login from './Login';
import Home from './Home';
import SignUp from './SignUp';
function App() {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        fetch("/me")
            .then(res => {
                if (res.ok) {
                    res.json().then(user => setUser(user))
                } else
                    navigate("/login")
            })
    }, [])
    console.log(user)


    return (
        <div class="App">

            <Routes>
                <Route exact path="/" element={<Home user={user} />}></Route>

                <Route exact path="/login" element={<Login onLogin={setUser} />}></Route>

                <Route path="/signup" element={<SignUp />} />
            </Routes>

        </div>

    );
}

export default App;
