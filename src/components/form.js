import '../style/form.scss';
import { Link } from 'react-router-dom';

function Form(props) {

    const formGroups = props.fields.map((field) => 
        <div className="form-group">
            <div class="input-container">
                <input placeholder={field[0]} name={field[1]} id={field[1]} type={field[2]}></input>
            </div>
        </div>
    );

    let extraData;
    if (props.button === 'Sign In') {
        extraData = <p>New to ChatApp? <Link to="/signup">Create An Account</Link></p>
    }

    return(
        <div className="form-container">
            <form>
                <h1>{ props.title }</h1>
                { formGroups }
                <div className="buttons-container buttons-container-one">
                    <div className="button-container one-button">
                        <button>{ props.button }</button>
                    </div>
                </div>
                { extraData }
            </form>
        </div>
    );
}

export default Form;