import classNames from 'classnames/bind';
import styles from './Services.module.scss';
import tau from '../../../../image/tau.jpg';
import traicay from '../../../../image/traicay.jpg';
import banhxeo from '../../../../image/banhxeo1.webp';
import culao from '../../../../image/culao.jpeg';
import colaido from '../../../../image/colaido.jpg';
const cx = classNames.bind(styles);
function Services() {
    return (
        <div className={cx('container')}>
            <img src={tau} />
            <div className={cx('content')}>
                <div className={cx('content-left')}>
                    <h1 className={cx('header')}>Introduce</h1>
                    <div className={cx('line-dec')}></div>
                    <div className={cx('caption')}>
                        Can Tho is the biggest city in westside of Viet Nam country. It's called "The City of Rivers"
                        because it has 13 rivers on inside and border area, Hau River among them. Travel to this place,
                        you can feel the rural atmostphere mix with modern life clearly. Booking a tour and come with us
                        on this summer, welcome to Can Tho City.
                    </div>
                    <div className={cx('header-list')}>We always proud of:</div>
                    <div className={cx('line-dec')}></div>
                    <ul className={cx('list')}>
                        <li className={cx('list-item')}>- Friendly, naive peoples</li>
                        <li className={cx('list-item')}>- Special foods: Cù Lao HotPot, Mắm HotPot,...</li>
                        <li className={cx('list-item')}>- Folk Cake: Bánh xèo.</li>
                        <li className={cx('list-item')}>
                            - So much natural fruits: Durian, saboche, mango, coconut,...
                        </li>
                        <li className={cx('list-item')}>- Many famous place.</li>
                    </ul>
                </div>
                <div className={cx('content-right')}>
                    <div className={cx('right-upper')}>
                        <div className={cx('right-item')}>
                            <img className={cx('right-item-img')} src={traicay} />
                            <div className={cx('item-inner')}>
                                <h1 className={cx('right-header')}>Fruits</h1>
                            </div>
                        </div>
                        <div className={cx('right-item')}>
                            <img className={cx('right-item-img')} src={banhxeo} />
                            <div className={cx('item-inner')}>
                                <h1 className={cx('right-header')}>Bánh xèo</h1>
                            </div>
                        </div>
                    </div>
                    <div className={cx('right-under')}>
                        <div className={cx('right-item')}>
                            <img className={cx('right-item-img')} src={culao} />
                            <div className={cx('item-inner')}>
                                <h1 className={cx('right-header')}>Cù lao Hotpot</h1>
                            </div>
                        </div>
                        <div className={cx('right-item')}>
                            <img className={cx('right-item-img')} src={colaido} />
                            <div className={cx('item-inner')}>
                                <h1 className={cx('right-header')}>People</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
