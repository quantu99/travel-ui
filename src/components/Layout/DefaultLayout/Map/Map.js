import { useState, useEffect } from 'react';
import cobanglang from '../../../../image/lu.jpg';
import map from '../../../../image/14.png';
import classNames from 'classnames/bind';
import styles from './Map.module.scss';
import SendMessage from './SendMessage';
import SendMessageFinal from './SendMessageFinal';
const cx = classNames.bind(styles);
function Map({ messages, setMessages }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('background-img')} src={cobanglang} alt="background-img" />
            <div className={cx('container')}>
                <div className={cx('message')}>
                    <SendMessageFinal messages={messages} setMessages={setMessages} />
                </div>
                <div className={cx('map')}>
                    <a
                        target="_blank"
                        href="https://www.google.com/maps/place/C%E1%BA%A7n+Th%C6%A1,+Ninh+Ki%E1%BB%81u,+C%E1%BA%A7n+Th%C6%A1,+Vi%E1%BB%87t+Nam/@10.0359593,105.7546506,13z/data=!4m15!1m8!3m7!1s0x31a0629f927382cd:0x72a463d91109ec67!2zQ-G6p24gVGjGoSwgVmnhu4d0IE5hbQ!3b1!8m2!3d10.0653203!4d105.5591218!16s%2Fg%2F1w4533dx!3m5!1s0x31a0629f6de3edb7:0x527f09dbfb20b659!8m2!3d10.0451618!4d105.7468535!16zL20vMDNmY20z?hl=vi-VN"
                    >
                        <img src={map} />
                        <h1 className={cx('google')}>Check out on Google Map</h1>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Map;
