import styles from './Map.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function SendMessageSuccess({ addMoreFeedBack }) {
    const handleClick = () => {
        addMoreFeedBack(true);
    };
    return (
        <div className={cx('child-wrapper')}>
            <div className={cx('success-wrapper')}>
                <h1>Send message success, we will check this mail and reply you soon!</h1>
                <h1>Thank you for your feedback </h1>
                <button className={cx('btn', 'success-btn')} onClick={handleClick}>
                    Add more feedback
                </button>
            </div>
        </div>
    );
}

export default SendMessageSuccess;
