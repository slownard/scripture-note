import { useState } from "react";

function SignUp({ user, setUser }) {

    const [selectedImage, setSelectedImage] = useState(null)

    // State for input values in sign up form 
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [town, setTown] = useState('')
    const [state, setState] = useState('')
    const [homeChurch, setHomechurch] = useState('')
    const [instagram, setInstagram] = useState('')
    const [bio, setBio] = useState('')

    // const [selectedImage, setSelectedImage] = useState(null)
    // const [caption, setCaption] = useState('')

    // function handleSubmit() {
    //     fetch("/post", { method: "POST", headers: { 'Content-Type': 'application/json', }, body: JSON.stringify(caption.selectedImage), })
    //         .then((res) => res.json())
    //         .then((res) => { console.log(res); })
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(firstname, lastname, username, password, email, town, state, homeChurch, instagram, bio)
        })
    }



    return (
        <div class="signup-form">
            <h2>Signup: </h2>
            <form onSubmit={handleSubmit}>


                <input
                    type="text"
                    name="First name"
                    placeholder="First name"
                    onChange={(e) => setFirstname(e.target.value)}
                    value={firstname}
                />

                <input
                    type="text"
                    name="Last name"
                    placeholder="Last name"
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastname}
                />

                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />

                <input
                    type="text"
                    name="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <input
                    type="text"
                    name="town"
                    placeholder="town"
                    onChange={(e) => setTown(e.target.value)}
                    value={town}
                />

                <input
                    type="text"
                    name="state"
                    placeholder="state"
                    onChange={(e) => setState(e.target.value)}
                    value={state}
                />

                <input
                    type="text"
                    name="Home Church"
                    placeholder="Home Church"
                    onChange={(e) => setHomechurch(e.target.value)}
                    value={homeChurch}
                />

                <input
                    type="text"
                    name="instagram"
                    placeholder="instagram"
                    onChange={(e) => setInstagram(e.target.value)}
                    value={instagram}
                />

                <input
                    type="text"
                    name="bio"
                    placeholder="bio"
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}
                />


                <input type="file"
                    onChange={e => setSelectedImage(e.target.value)}
                    value={selectedImage} />

                <input type="submit"
                    value="Submit"
                />
            </form>

        </div>
    )
}

export default SignUp;