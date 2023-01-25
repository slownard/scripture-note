import { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Nav from './Nav';
import Login from './Login';
import Home from './Home';
import SignUp from './SignUp';
import ChurchContainer from './ChurchContainer';
import Profile from './Profile';


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

    function handleLogOut() {
        fetch('/logout', {
            method: "DELETE"
        }).then(res => {
            if (res.ok) {
                setUser(null)
            }
        })
    }



    return (
        <div class="App">

            <Nav user={user} handleLogOut={handleLogOut} />

            <Routes>
                <Route exact path="/" element={<Home user={user} />}></Route>

                <Route exact path="/login" element={<Login onLogin={setUser} />}></Route>

                <Route path="/signup" element={<SignUp />} />

                <Route path="/profile"
                    element={<Profile user={user} />} />

                <Route path="/churches"
                    element={<ChurchContainer />} />


            </Routes>

        </div>

    );
}

export default App;
