import '../style/home.scss';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function HomeContent() {
    /*const triangleBackground = useRef(null);
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);
    const [redirect, setRedirect] = useState(false);

    function handleClick(e) {
        e.preventDefault();
        triangleBackground.current.classList.add("rotate-triangle");
        setRedirect(e.target.id);
        setTimeout(function() {
            setRedirectToReferrer(true)
        }, 200);
        
    }

    if(redirectToReferrer) {
        return <Redirect from="/" to={redirect}/>;
    }*/

    return (
        <div className="home-container">
            <div className="triangle-container"></div>
            <div className="text-container">
                <h1>ChatApp</h1>
                <div className="buttons-container">
                    <div className="sign-up-container">
                        <Link to="signup" className="sign-up" id="signup">Sign Up</Link>
                    </div>
                    <div className="log-in-container">
                        <Link to="login" className="log-in" id="login">Log In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContent;