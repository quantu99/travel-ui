import classNames from 'classnames/bind';
import styles from './End.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function End() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h1 className={cx('contact')}>Contact us</h1>
                <div>
                    <a className={cx('item')} target="_blank" href="https://www.facebook.com/canthocity.vietnam">
                        <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                    </a>
                    <a className={cx('item')} target="_blank" href="https://www.instagram.com/canthorivertour/">
                        <FontAwesomeIcon className={cx('icon')} icon={faInstagram} />
                    </a>
                    <a
                        className={cx('item')}
                        target="_blank"
                        href="https://www.google.com/search?q=du+l%E1%BB%8Bch+th%C3%A0nh+ph%E1%BB%91+C%E1%BA%A7n+Th%C6%A1&oq=du+l%E1%BB%8Bch+th%C3%A0nh+ph%E1%BB%91+C%E1%BA%A7n+Th%C6%A1&aqs=chrome..69i57j0i22i30l9.9850j0j9&sourceid=chrome&ie=UTF-8"
                    >
                        <FontAwesomeIcon className={cx('icon')} icon={faGoogle} />
                    </a>
                    <a className={cx('item')} target="_blank" href="https://github.com/quantu99">
                        <FontAwesomeIcon className={cx('icon')} icon={faGithub} />
                    </a>
                    <a className={cx('item')} target="_blank" href="https://www.tiktok.com/@canthotourism">
                        <FontAwesomeIcon className={cx('icon')} icon={faTiktok} />
                    </a>
                    <Link to={'/response'} className={cx('item')} href="https://www.tiktok.com/@canthotourism">
                        <FontAwesomeIcon className={cx('icon')} icon={faMailBulk} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default End;
