import { useState, useEffect } from 'react';
import styles from './Map.module.scss';
import classNames from 'classnames/bind';
import rules from './rules';
const cx = classNames.bind(styles);
function SendMessage({ sendMessage, messages, setMessages }) {
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const [values, setValues] = useState({
        fullname: '',
        email: '',
        message: '',
    });
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const saveMessageToLocalStorage = () => {
        setMessages((prev) => {
            const newMessage = [...prev, values];
            localStorage.setItem('message', JSON.stringify(newMessage));
            return newMessage;
        });
    };
    const handleLogin = (e) => {
        e.preventDefault();
        setErrors(rules(values));
        setDataIsCorrect(true);
        saveMessageToLocalStorage();
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            sendMessage(true);
        }
    }, [errors]);
    return (
        <div className={cx('child-wrapper')}>
            <input
                value={values.fullname}
                onChange={handleChange}
                type="name"
                name="fullname"
                className={cx('input')}
                placeholder="Your name..."
            />
            {errors.fullname && <p className={cx('error-message')}>{errors.fullname}</p>}
            <input
                value={values.email}
                onChange={handleChange}
                type="email"
                name="email"
                className={cx('input')}
                placeholder="Your email..."
            />
            {errors.email && <p className={cx('error-message')}>{errors.email}</p>}
            <input
                value={values.message}
                onChange={handleChange}
                type="message"
                name="message"
                className={cx('input', 'input-message')}
                placeholder="Your message..."
            />
            {errors.message && <p className={cx('error-message')}>{errors.message}</p>}
            <button onClick={handleLogin} className={cx('btn')}>
                SEND MESSAGE
            </button>
        </div>
    );
}

export default SendMessage;
