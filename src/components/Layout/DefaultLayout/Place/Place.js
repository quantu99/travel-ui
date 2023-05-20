import { useState, useEffect } from 'react';
import background from '../../../../image/du-lich-can-tho-5.jpg';
import styles from './Place.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Place({ placeDatas }) {
    const [places, setPlaces] = useState([]);
    const [places1, setPlaces1] = useState([]);
    const [places2, setPlaces2] = useState([]);
    const [visible, setVisible] = useState(true);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const handleClickNext = () => {
        setVisible(false);
        setVisible1(true);
    };
    const handleClickPrev = () => {
        setVisible(false);
        setVisible2(true);
    };
    const handleClickNext1 = () => {
        setVisible1(false);
        setVisible2(true);
    };
    const handleClickPrev1 = () => {
        setVisible1(false);
        setVisible(true);
    };
    const handleClickNext2 = () => {
        setVisible(true);
        setVisible2(false);
    };
    const handleClickPrev2 = () => {
        setVisible1(true);
        setVisible2(false);
    };
    const onClick = () => {
        setVisible(true);
        setVisible1(false);
        setVisible2(false);
    };
    const onClick1 = () => {
        setVisible(false);
        setVisible1(true);
        setVisible2(false);
    };
    const onClick2 = () => {
        setVisible(false);
        setVisible1(false);
        setVisible2(true);
    };
    useEffect(() => {
        const place = placeDatas.filter((place) => {
            return place.area.includes('ninh kieu province');
        });
        setPlaces(place);
    }, []);
    useEffect(() => {
        const place1 = placeDatas.filter((place) => {
            return place.area.includes('binh thuy province');
        });
        setPlaces1(place1);
    }, []);
    useEffect(() => {
        const place2 = placeDatas.filter((place) => {
            return place.area.includes('cai rang province');
        });
        setPlaces2(place2);
    }, []);
    return (
        <div className={cx('wrapper')}>
            <img className={cx('backround-image')} src={background} />
            <div className={cx('container')}>
                {visible && <h1 className={cx('header')}>Ninh Kiều Province</h1>}
                {visible1 && <h1 className={cx('header')}>Bình Thủy Province</h1>}
                {visible2 && <h1 className={cx('header')}>Cái Răng Province</h1>}
                {visible && (
                    <div className={cx('place')}>
                        {places.map((place) => (
                            <div className={cx('detail')}>
                                <img src={place.img} alt="ninh-kieu-picture" />
                                <p>{place.name}</p>
                                <Link to={`/${place.id}`}>
                                    <button className={cx('btn')}>Find out more</button>
                                </Link>
                            </div>
                        ))}
                        <FontAwesomeIcon
                            onClick={handleClickNext}
                            className={cx('icon-right', 'icon')}
                            icon={faChevronRight}
                        />
                        <FontAwesomeIcon
                            onClick={handleClickPrev}
                            className={cx('icon-left', 'icon')}
                            icon={faChevronLeft}
                        />
                    </div>
                )}
                {visible1 && (
                    <div className={cx('place')}>
                        {places1.map((place) => (
                            <div className={cx('detail')}>
                                <img src={place.img} alt="binh-thuy-picture" />
                                <p>{place.name}</p>
                                <Link to={`/${place.id}`}>
                                    <button className={cx('btn')}>Find out more</button>
                                </Link>
                            </div>
                        ))}
                        <FontAwesomeIcon
                            onClick={handleClickNext1}
                            className={cx('icon-right', 'icon')}
                            icon={faChevronRight}
                        />
                        <FontAwesomeIcon
                            onClick={handleClickPrev1}
                            className={cx('icon-left', 'icon')}
                            icon={faChevronLeft}
                        />
                    </div>
                )}
                {visible2 && (
                    <div className={cx('place')}>
                        {places2.map((place) => (
                            <div className={cx('detail')}>
                                <img src={place.img} alt="cai-rang-picture" />
                                <p>{place.name}</p>
                                <Link to={`/${place.id}`}>
                                    <button className={cx('btn')}>Find out more</button>
                                </Link>
                            </div>
                        ))}
                        <FontAwesomeIcon
                            onClick={handleClickNext2}
                            className={cx('icon-right', 'icon')}
                            icon={faChevronRight}
                        />
                        <FontAwesomeIcon
                            onClick={handleClickPrev2}
                            className={cx('icon-left', 'icon')}
                            icon={faChevronLeft}
                        />
                    </div>
                )}
                <div className={cx('under-btn')}>
                    {!visible && (
                        <button onClick={onClick} className={cx('under-btn-item')}>
                            Ninh Kiều
                        </button>
                    )}
                    {visible && (
                        <button className={cx('under-btn-item')}>
                            <div className={cx('btn-name')}>Ninh Kiều</div>
                        </button>
                    )}
                    {!visible1 && (
                        <button onClick={onClick1} className={cx('under-btn-item')}>
                            Bình Thủy
                        </button>
                    )}
                    {visible1 && (
                        <button className={cx('under-btn-item')}>
                            <div className={cx('btn-name')}>Bình Thủy</div>
                        </button>
                    )}
                    {!visible2 && (
                        <button onClick={onClick2} className={cx('under-btn-item')}>
                            Cái Răng
                        </button>
                    )}
                    {visible2 && (
                        <button className={cx('under-btn-item')}>
                            <div className={cx('btn-name')}>Cái Răng</div>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Place;
