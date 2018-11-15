import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import './camera.css';

class Camera extends Component {
    render() {
        const camClass = cn('Camera');

        return (
            <div className={camClass()}>
                <div className={camClass('ImgWrapper')}>
                    <div className={camClass('Movable')}>
                        <img className={camClass('Img')} srcSet="assets/img/img2x.png 2x, assets/img/img3x.png 3x" src="assets/img/img.png" alt="Камера" />
                    </div>
                </div>
                <div className={camClass('Info')}>
                    <div className={camClass('InfoItem')}>
                        <span className={camClass('InfoItemName')}>Приближение: </span>
                        <span className={camClass('InfoItemVal')} data-info="zoom">0%</span>
                    </div>
                    <div className={camClass('InfoItem')}>
                        <span className={camClass('InfoItemName')}>Яркость: </span>
                        <span className={camClass('InfoItemVal')} data-info="brightness">100%</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Camera;
