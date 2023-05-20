import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from './Header';
import Services from './Services';
import Slide from './Slide/Slide';
import Place from './Place/Place';
import Map from './Map/Map';
import End from './End/End';
const cx = classNames.bind(styles);
function DefaultLayout({ placeDatas, messages, setMessages }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Services />
            {/* <Slide placeDatas={placeDatas} /> */}
            <Place placeDatas={placeDatas} />
            <Map messages={messages} setMessages={setMessages} />
            <End />
        </div>
    );
}

export default DefaultLayout;
