import React, { useState } from "react";


const Form = () => {
 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullname] = useState('');
 
    function onChangeUsername(e) {
        setUsername(e.target.value)
    }
    function onChangePassword(e) {
        setPassword(e.target.value)
    }

    function onChangeFullname(e) {
        setFullname(e.target.value)
    }
    function onChangeEmail(e) {
        setEmail(e.target.value)
    }
 
    function onSubmit(e) {
        e.preventDefault()
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('fullname', fullName);
        localStorage.setItem('email', email);
    }
 
    function getData() {
        console.log(localStorage.getItem('username'));
        console.log(localStorage.getItem('password'))
        console.log(localStorage.getItem('fullname'));
        console.log(localStorage.getItem('email'))
    }


    return (
        <>
            <div>
                <h1>Sign in </h1>
 
                <div>
                    <form onSubmit={onSubmit}>
                        <div>
                            <label>Username</label>
                            <input type="text" value={username} onChange={onChangeUsername} />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" value={password} onChange={onChangePassword} />
                        </div>
                        <div>
                            <label>Full name</label>
                            <input type="text" value={fullName} onChange={onChangeFullname} />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" value={email} onChange={onChangeEmail} />
                        </div>
                        <button type="submit">Submit</button>

                        {/**Consol testing see if user data saved locally */}
                    </form>
                        <button type="button" onClick={getData}>Get Data</button> 
                </div>
            </div>
        </>
    );
};
 
export default Form;