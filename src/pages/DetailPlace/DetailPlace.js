import { useParams, Link } from 'react-router-dom';
import End from '../../components/Layout/DefaultLayout/End/End';
import background from '../../image/360_F_496233202_vVjZ7Ce9mjB1TPE3jayU8px0TxoRN5Tj.jpg';
import classNames from 'classnames/bind';
import styles from './DetailPlace.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHouseChimney } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function DetailPlace({ placeDatas }) {
    const { placeId } = useParams();
    const place = placeDatas.find((place) => place.id == placeId);
    return (
        <div>
            {place ? (
                <div className={cx('wrapper')}>
                    <div className={cx('top')}>
                        <Link to={'/travel-ui'}>
                            <FontAwesomeIcon className={cx('icon-first')} icon={faHouseChimney} />
                        </Link>
                        <img src={background} />
                        <div className={cx('top-content')}>
                            <h1 className={cx('cantho')}>CAN THO</h1>
                            <div className={cx('line')}> - </div>
                            <h1 className={cx('thecity')}>The city of rivers</h1>
                        </div>
                    </div>
                    <div className={cx('container')}>
                        <div className={cx('navigate')}>
                            <Link to={'/travel-ui'}>
                                <h1 className={cx('home')}>Home</h1>
                            </Link>
                            <FontAwesomeIcon className={cx('icon')} icon={faChevronRight} />
                            <h1 className={cx('navigate-place')}>{place.name}</h1>
                        </div>
                        <h1 className={cx('header')}>{place.name}</h1>
                        <img src={place.img} />
                        <p className={cx('paragraph')}>{place.description}</p>
                        <audio src={place.sound} autoPlay={true}></audio>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
            <End />
        </div>
    );
}

export default DetailPlace;
