import React, { useState } from "react";
import { addUser } from "../data/repository";
 


const Form = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const dateCreated = addUser(email, password, fullname); 
    

    function onChangeEmail(e) {
        setEmail(e.target.value)
    }

    function onChangePassword(e) {
        setPassword(e.target.value)
    }

    function onChangeFullname(e) {
        setFullname(e.target.value)
    }
 
    function onSubmit(e) {
        e.preventDefault()

        localStorage.setItem('username', email);
        localStorage.setItem('password', password);
        localStorage.setItem('fullname',fullname);

        let addError = addUser(email,password,fullname,dateCreated)
        if (addError !== undefined) {
            alert(addError)

        }
        return;
    }

    // function getData() {
    //     console.log(localStorage.getItem('password'));
    //     console.log(localStorage.getItem('email'));
    //     console.log(localStorage.getItem('fullname'));
    // }
    return (
        <>
            <div>
                <h1>signup now</h1>
 
                <div>
                    <form onSubmit={onSubmit}>
                        <div>
                            <label>Email</label>
                            <input type="text" value={email} onChange={onChangeEmail} />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" value={password} onChange={onChangePassword} />
                        </div>
                        <div>
                            <label>Full Name</label>
                            <input type="fullname" value={fullname} onChange={onChangeFullname} />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};
 
export default Form;