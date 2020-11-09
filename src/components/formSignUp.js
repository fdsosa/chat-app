import '../style/form.scss';
import { React, useState } from 'react';
import { Link } from 'react-router-dom';

function FormSignUp(props) {
    const [nameSign, setNameSign] = useState('');
    const [emailSign, setEmailSign] = useState('');
    const [passwordSign, setPasswordSign] = useState('');
    const [rpasswordSign, setRpasswordSign] = useState('');

    const handleForm = () => {
        console.log(nameSign);
        console.log(emailSign);
        console.log(passwordSign);
        console.log(rpasswordSign);
    }

    const handleNameChange = (e) => {
        setNameSign(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmailSign(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPasswordSign(e.target.value);
    }

    const handleRpasswordChange = (e) => {
        setRpasswordSign(e.target.value);
    }

    return(
        <div className="form-container">
            <form>
                <h1>Create your account</h1>
                <div className="form-group">
                    <div className="input-container">
                        <input placeholder='Name' name='name' value={nameSign} id='name' onChange={handleNameChange} type='text'></input>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-container">
                        <input placeholder='Email' name='email' value={emailSign} id='email' onChange={handleEmailChange} type='email'></input>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-container">
                        <input placeholder='Password' name='password' value={passwordSign} id='password' onChange={handlePasswordChange} type='password'></input>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-container">
                        <input placeholder='Repeat Password' name='rpassword' value={rpasswordSign} id='rpassword' onChange={handleRpasswordChange} type='password'></input>
                    </div>
                </div>
                <div className="buttons-container buttons-container-one">
                    <div className="button-container one-button">
                        <button type="button" onClick={handleForm}>Create Account</button>
                    </div>
                </div>
                <p>New to ChatApp? <Link to="/signup">Create An Account</Link></p>
            </form>
        </div>
    );
}

export default FormSignUp;