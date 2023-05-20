import SendMessage from './SendMessage';
import SendMessageSuccess from './SendMessageSuccess';
import { useState } from 'react';
import styles from './Map.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function SendMessageFinal({ messages, setMessages }) {
    const [messageIsSend, setMessageIsSend] = useState(false);
    const sendMessage = () => {
        setMessageIsSend(true);
    };
    const addMoreFeedBack = () => {
        setMessageIsSend(!messageIsSend);
    };
    return (
        <div className={cx('initial-wrapper')}>
            {!messageIsSend ? (
                <SendMessage sendMessage={sendMessage} messages={messages} setMessages={setMessages} />
            ) : (
                <SendMessageSuccess addMoreFeedBack={addMoreFeedBack} />
            )}
        </div>
    );
}

export default SendMessageFinal;
