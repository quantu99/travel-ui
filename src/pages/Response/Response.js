import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Response.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faHouseChimney, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Response({ messages, setMessages }) {
    const deleteMessageFromLocalStorage = () => {
        localStorage.removeItem('message');
        setMessages([]);
    };
    useEffect(() => {
        const loadUserFromLocalStorage = () => {
            const messageJSON = localStorage.getItem('message');
            if (messageJSON) {
                setMessages(JSON.parse(messageJSON));
            }
        };
        loadUserFromLocalStorage();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header-wrapper')}>
                    <h1 className={cx('header')}>Our story</h1>
                    <FontAwesomeIcon className={cx('header-icon')} icon={faUsers} />
                </div>
                <div className={cx('container-wrapper')}>
                    <Link to={'/travel-ui'} className={cx('home')}>
                        <FontAwesomeIcon className={cx('home-icon')} icon={faHouseChimney} />
                        <h1 className={cx('home-content')}>Back to home</h1>
                    </Link>
                </div>
                {messages.map((message) => (
                    <div className={cx('item')}>
                        <div className={cx('upper')}>
                            <FontAwesomeIcon className={cx('item-icon')} icon={faUser} />
                            <h1 className={cx('name')}>{message.fullname}:</h1>
                        </div>
                        <div className={cx('under')}>
                            <FontAwesomeIcon className={cx('item-icon')} icon={faHandHoldingHeart} />
                            <p className={cx('message')}>- {message.message}</p>
                        </div>
                    </div>
                ))}
                <button onClick={deleteMessageFromLocalStorage} className={cx('btn')}>
                    Clear
                </button>
            </div>
        </div>
    );
}

export default Response;
