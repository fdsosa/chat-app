import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

let contacts = [['Jorge', 'Mila horno', ''], ['Pablo 2', 'Manito', '1'], ['Familia Unida', 'Hola gente', '21'], ['Bar3100', 'Promos!', '54'], ['Victoria', 'Al menos lo mantuvo', '1'], ['Mama 2', 'Photo', ''], ['Flor', 'Photo', '']];
let listContacts;

if (contacts === null) {
    listContacts =<div className="no-contacts-container"><p>Add contacts to chat with them!</p></div>;
} else {
    listContacts = contacts.map((contact) => 
        <div className="contact-container">
            <div className="contact-info">
                <div className="contact-icon">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="contact-text">
                    <p className="contact-name">{contact[0]}</p>
                    <p className="contact-message">{contact[1]}</p>
                </div>
            </div>
        </div>
    )
}

function ChatContacts(props) {
    return(
        <div className="contacts-container">
            { listContacts }
        </div>
    );
}

export default ChatContacts;