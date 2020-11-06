import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faSearch, faUser, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const messages = [['from', 'Hola que tal'], ['to', 'bien'], ['to', 'y vos?'], ['from', 'bien por suerte'], ['to', 'ya hiciste la tarea'], ['from', 'claramente'], ['from', 'Hola que tal'], ['to', 'bien'], ['to', 'y vos?'], ['from', 'bien por suerte'], ['to', 'ya hiciste la tarea'], ['from', 'claramente'], ['from', 'Hola que tal'], ['to', 'bien'], ['to', 'este mensaje es extremadamente larga para ver como actua mi css ante un mensaje de tal portadura ahora colocare texto relleno este mensaje es extremadamente larga para ver como actua mi css ante un mensaje de tal portadura ahora colocare texto relleno'], ['from', 'este mensaje es extremadamente larga para ver como actua mi css ante un mensaje de tal portadura ahora colocare texto relleno este mensaje es extremadamente larga para ver como actua mi css ante un mensaje de tal portadura ahora colocare texto relleno'], ['to', 'ya hiciste la tarea'], ['from', 'claramente']];

const listMessages = messages.map((message) => {
    return (message[0] === 'from') ? 
        <div className="from-container">
            <div className="from-message">
                <div className="arrow-left"></div>
                <div className="message-body-container">{message[1]}</div>
            </div>
        </div>  
    :
        <div className="to-container">
            <div className="to-message">
                <div className="arrow-right"></div>
                <div className="message-body-container">{message[1]}</div>
            </div>
        </div>
    }
)

function ChatMessages(props) {
    return(
        <div className="message-container">
            <div className="message-header">
                <div className="contact-data">
                    <div className="contact-icon">
                        <FontAwesomeIcon className="user" icon={faUser} />
                    </div>
                    <p>JorgeHnos</p>
                </div>
                <div className="icons-message">
                    <FontAwesomeIcon className="search" icon={faSearch} />
                    <FontAwesomeIcon className="menu" icon={faEllipsisV} />
                </div>
            </div>
            <div className="message-body">
                { listMessages }
            </div>
            <div className="message-input">
                <input type="text" placeholder="Text your message..."/>
                <div className="send-button">
                    <FontAwesomeIcon className="send" icon={faPaperPlane} />
                </div>
            </div>
        </div>
    );
}

export default ChatMessages;