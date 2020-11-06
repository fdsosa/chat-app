import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

function ChatHeader(props) {
    return(
        <div className="chat-header">
            <div className="user-data">
                <div className="user-icon">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <p>Federico</p>
            </div>  
            <div className="icons-container">
                <FontAwesomeIcon className="user" icon={faUserPlus} />
                <FontAwesomeIcon className="menu" icon={faEllipsisV} />
            </div>
        </div>
    );
}

export default ChatHeader;