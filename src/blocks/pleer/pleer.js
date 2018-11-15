import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import './pleer.css';

class Pleer extends Component {
    render() {
        const data = this.props.data;

        const cssPleer = cn('Pleer');

        return (
            <div className={cssPleer()}>
                <div className={cssPleer('Header')}>
                    <div className={cssPleer('Icon')}>
                        <img className={cssPleer('IconImg')} src={data.albumcover} alt="" />
                    </div>
                    <div className={cssPleer('Track')}>
                        <div className={cssPleer('TrackName')}>{data.artist + ' - ' + data.name}</div>
                        <div className={cssPleer('TrackSlider')}>
                            <div className={cssPleer('TrackSliderLine')}>
                                <div className={cssPleer('TrackSliderControl')}></div>
                            </div>
                            <div className={cssPleer('TrackTime')}>{data.length}</div>
                        </div>
                    </div>
                </div>
                <div className={cssPleer('Footer')}>
                    <div className={cssPleer('Btns')}>
                        <button className={cssPleer('Btn', {type: 'prev'})}>
                            <img src='./assets/img/icons/icon-music-btn.svg' alt="prev" />
                        </button>
                        <button className={cssPleer('Btn', {type: 'next'})}>
                            <img src='./assets/img/icons/icon-music-btn.svg' alt="next" />
                        </button>
                    </div>
                    <div className={cssPleer('Volume')}>
                        <div className={cssPleer('VolumeSlider')}>
                            <div className={cssPleer('VolumeSliderLine')}>
                                <div className={cssPleer('VolumeSliderControl')}></div>
                            </div>
                            <div className={cssPleer('VolumeVal')}>{data.volume + '%'}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pleer;
