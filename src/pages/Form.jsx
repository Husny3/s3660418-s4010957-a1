import React, { useState } from "react";
import { addUser } from "../data/repository";
import {validate} from "../data/Validation"
import { Navigate } from "react-router-dom";


const Form = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
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
         // Validation
         const errors = validate({ email, password });
         if (errors.email) {
             setEmailError(errors.email);
             return;
         }
         if (errors.password) {
             setPasswordError(errors.password);
             return;
         }


        alert("User created")
      

        
        let addError = addUser(email,password,fullname,dateCreated)
        if (addError !== undefined) {
            alert('user already created')

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
            <h1>Signup Now</h1>
            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <label>Email</label>
                        <input type="text" value={email} onChange={onChangeEmail} />
                        {emailError && <div>{emailError}</div>}
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" value={password} onChange={onChangePassword} />
                        {passwordError && <div>{passwordError}</div>}
                    </div>
                    <div>
                        <label>Full Name</label>
                        <input type="text" value={fullname} onChange={onChangeFullname} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        </>
    );
};
 
export default Form;