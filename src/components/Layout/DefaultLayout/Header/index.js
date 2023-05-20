import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import cantho from '../../../../image/cantho-river-tour-co.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight, faCircle, faCircleDot, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
const cx = classNames.bind(styles);
function Header() {
    const [listVisible, setListVisible] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [scroll0, setScroll0] = useState(false);
    const [scroll1, setScroll1] = useState(false);
    const [scroll2, setScroll2] = useState(false);
    const [scroll3, setScroll3] = useState(false);
    // event scroll 0 -> 700px ( intro) handleScroll
    useEffect(() => {
        const handleScroll = function () {
            setScroll(window.scrollY >= 0 && window.scrollY < 700);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // event scroll 700 -> 1452px ( service) handleScroll0
    useEffect(() => {
        const handleScroll0 = function () {
            setScroll0(window.scrollY >= 700 && window.scrollY < 1460);
        };
        window.addEventListener('scroll', handleScroll0);
        return () => {
            window.removeEventListener('scroll', handleScroll0);
        };
    }, []);
    // event scroll 1400 -> 2100px ( place) handleScroll1
    useEffect(() => {
        const handleScroll1 = function () {
            setScroll1(window.scrollY >= 1460 && window.scrollY < 2160);
        };
        window.addEventListener('scroll', handleScroll1);
        return () => {
            window.removeEventListener('scroll', handleScroll1);
        };
    }, []);
    // event scroll 2100 -> 2800px ( more) handleScroll2
    useEffect(() => {
        const handleScroll2 = function () {
            setScroll2(window.scrollY >= 2160 && window.scrollY < 2700);
        };
        window.addEventListener('scroll', handleScroll2);
        return () => {
            window.removeEventListener('scroll', handleScroll2);
        };
    }, []);
    // event scroll to more 2800px ( more) handleScroll3
    useEffect(() => {
        const handleScroll3 = function () {
            setScroll3(window.scrollY >= 2700);
        };
        window.addEventListener('scroll', handleScroll3);
        return () => {
            window.removeEventListener('scroll', handleScroll3);
        };
    }, []);
    const moveToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const moveToIntro = () => {
        window.scrollTo({
            top: 700,
            behavior: 'smooth',
        });
    };
    const moveToPlace = () => {
        window.scrollTo({
            top: 1460,
            behavior: 'smooth',
        });
    };
    const moveToMap = () => {
        window.scrollTo({
            top: 2160,
            behavior: 'smooth',
        });
    };
    const moveToContact = () => {
        window.scrollTo({
            top: 2700,
            behavior: 'smooth',
        });
    };
    const handleVisible = () => {
        setListVisible(!listVisible);
    };
    return (
        <div className={cx('container')}>
            <img src={cantho} />
            <div className={cx('content')}>
                <h1>CAN THO</h1>
                <p>TOUR- Back to the west</p>
                <h3>The City of Rivers</h3>
            </div>
            {listVisible ? (
                <aside className={cx('sidebar')}>
                    <div onClick={handleVisible} className={cx('remove')}>
                        <FontAwesomeIcon className={cx('remove-icon')} icon={faCaretRight} />
                    </div>
                    <ul className={cx('list')}>
                        <li className={cx('list-item')}>
                            {scroll && <FontAwesomeIcon className={cx('list-icon-active')} icon={faCircleDot} />}
                            {!scroll && <FontAwesomeIcon className={cx('list-icon')} icon={faCircle} />}
                            {scroll && <p className={cx('list-caption-active')}> Intro</p>}
                            {!scroll && (
                                <p onClick={moveToTop} className={cx('list-caption')}>
                                    Intro
                                </p>
                            )}
                        </li>
                        <li className={cx('list-item')}>
                            {scroll0 && <FontAwesomeIcon className={cx('list-icon-active')} icon={faCircleDot} />}
                            {!scroll0 && <FontAwesomeIcon className={cx('list-icon')} icon={faCircle} />}
                            {scroll0 && <p className={cx('list-caption-active')}> Services</p>}
                            {!scroll0 && (
                                <p onClick={moveToIntro} className={cx('list-caption')}>
                                    Services
                                </p>
                            )}
                        </li>
                        <li className={cx('list-item')}>
                            {scroll1 && <FontAwesomeIcon className={cx('list-icon-active')} icon={faCircleDot} />}
                            {!scroll1 && <FontAwesomeIcon className={cx('list-icon')} icon={faCircle} />}
                            {scroll1 && <p className={cx('list-caption-active')}> Place</p>}
                            {!scroll1 && (
                                <p onClick={moveToPlace} className={cx('list-caption')}>
                                    Place
                                </p>
                            )}
                        </li>
                        <li className={cx('list-item')}>
                            {scroll2 && <FontAwesomeIcon className={cx('list-icon-active')} icon={faCircleDot} />}
                            {!scroll2 && <FontAwesomeIcon className={cx('list-icon')} icon={faCircle} />}
                            {scroll2 && <p className={cx('list-caption-active')}>Mess</p>}
                            {!scroll2 && (
                                <p onClick={moveToMap} className={cx('list-caption')}>
                                    Mess
                                </p>
                            )}
                        </li>
                        <li className={cx('list-item')}>
                            {scroll3 && <FontAwesomeIcon className={cx('list-icon-active')} icon={faCircleDot} />}
                            {!scroll3 && <FontAwesomeIcon className={cx('list-icon')} icon={faCircle} />}
                            {scroll3 && <p className={cx('list-caption-active')}> Contact us</p>}
                            {!scroll3 && (
                                <p onClick={moveToContact} className={cx('list-caption')}>
                                    Contact us
                                </p>
                            )}
                        </li>
                    </ul>
                </aside>
            ) : (
                <aside onClick={handleVisible} className={cx('sidebar2')}>
                    <FontAwesomeIcon className={cx('list-icon2')} icon={faCaretLeft} />
                </aside>
            )}
        </div>
    );
}
export default Header;
