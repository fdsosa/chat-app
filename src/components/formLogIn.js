import '../style/form.scss';
import { React, useState } from 'react';

function FormLogIn(props) {
    const [emailLogIn, setEmailLogIn] = useState(''); 
    const [passwordLogIn, setPasswordLogIn] = useState(''); 

    const handleEmailChange = (e) => {
        setEmailLogIn(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPasswordLogIn(e.target.value);
    }

    const handleForm = () => {
        console.log('Email: ' + emailLogIn);
        console.log('Password: ' + passwordLogIn);
    }

    return(
        <div className="form-container">
            <form>
                <h1>Sign in to ChatApp</h1>
                <div className="form-group">
                    <div className="input-container">
                        <input placeholder='Email' name='email' value={emailLogIn} id='email' onChange={handleEmailChange} type='email'></input>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-container">
                        <input placeholder='Password' name='password' value={passwordLogIn} id='password' onChange={handlePasswordChange} type='password'></input>
                    </div>
                </div>
                <div className="buttons-container buttons-container-one">
                    <div className="button-container one-button">
                        <button type="button" onClick={handleForm}>Sign In</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormLogIn;