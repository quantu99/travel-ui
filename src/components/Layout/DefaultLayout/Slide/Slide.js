import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import background from '../../../../image/du-lich-can-tho-5.jpg';
import styles from './Slide.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
const cx = classNames.bind(styles);
function Slide({ placeDatas }) {
    const [places, setPlaces] = useState([]);
    const [places1, setPlaces1] = useState([]);
    const [places2, setPlaces2] = useState([]);
    useEffect(() => {
        const place = placeDatas.filter((place) => {
            return place.area.includes('binh thuy province');
        });
        setPlaces(place);
    }, []);
    useEffect(() => {
        const place1 = placeDatas.filter((place) => {
            return place.area.includes('ninh kieu province');
        });
        setPlaces1(place1);
    }, []);
    useEffect(() => {
        const place2 = placeDatas.filter((place) => {
            return place.area.includes('cai rang province');
        });
        setPlaces2(place2);
    }, []);
    const settings = {
        dots: false, // Show navigation dots
        infinite: true, // Loop through images continuously
        speed: 500, // Transition speed between images
        slidesToShow: 1, // Number of images to show at once
        slidesToScroll: 1, // Number of images to scroll at once
    };
    return (
        <div className={cx('container')}>
            <img className={cx('container-background')} src={background} />
            <div className={cx('slider')}>
                <Slider {...settings}>
                    <div className={cx('slide-1')}>
                        <h1 className={cx('slide-1-header')}>Bình Thủy Province</h1>
                        <div className={cx('item-wrapper')}>
                            {places.map((place) => (
                                <div className={cx('item')}>
                                    <h1 className={cx('item-name')}>{place.name}</h1>
                                    <img className={cx('item-img')} src={place.img} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cx('slide-1')}>
                        <h1 className={cx('slide-1-header')}>Ninh Kiều Province</h1>
                        <div className={cx('item-wrapper')}>
                            {places1.map((place) => (
                                <div className={cx('item')}>
                                    <h1 className={cx('item-name')}>{place.name}</h1>
                                    <img className={cx('item-img')} src={place.img} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cx('slide-1')}>
                        <h1 className={cx('slide-1-header')}>Cái Răng Province</h1>
                        <div className={cx('item-wrapper')}>
                            {places2.map((place) => (
                                <div className={cx('item')}>
                                    <h1 className={cx('item-name')}>{place.name}</h1>
                                    <img className={cx('item-img')} src={place.img} />
                                </div>
                            ))}
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Slide;
