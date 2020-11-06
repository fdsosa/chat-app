import React from 'react';
import ChatHeader from '../components/chatHeader';
import ChatContacts from '../components/chatContacts';
import ChatMessages from '../components/chatMessages';
import '../style/chat.scss';

class Chat extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="chat-container">
                <div className="left-column">
                    <ChatHeader/>
                    <ChatContacts/>
                </div>
                <div className="right-column">
                    <ChatMessages/>
                </div>
            </div>
        );
    }
}

export default Chat;