import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import './card.css';
import { Btn } from '../btn/btn_main';
import Camera from '../camera/camera';
import Pleer from "../pleer/pleer";

class Card extends Component {
    render() {
        const data = this.props.data;

        const cardClass = cn('Card');
        const btnClass = cardClass('Btn');

        // create elements
        function createBtns(data) {
            const btns = [];

            for (let i = 0; i < data.length; i++) {
                let btnData = {};
                btnData.class = btnClass;
                btnData.text = data[i];
                if (data[i] === 'Да') btnData.mod = 'primary';
                btns.push(<Btn mod={btnData.mod} className={btnData.class} text={data[i]} key={i} />)
            }

            return (
                <div className={cardClass('WidgetBtns')}>
                    {btns}
                </div>
            );
        }

        // elements
        function Graph(props) {
            return (
                <img className={cardClass('Img')} src="assets/img/Richdata.svg" alt="График"></img>
            )
        }

        function Temperature(props) {
            return ([
                <div className={cardClass('WidgetData')} key="temp">
                    <span className={cardClass('WidgetDataName')}>Температура: </span>
                    <span className={cardClass('WidgetDataVal')}>{props.data.temperature + ' С'}</span>
                </div>,
                <div className={cardClass('WidgetData')} key="hum">
                    <span className={cardClass('WidgetDataName')}>Влажность: </span>
                    <span className={cardClass('WidgetDataVal')}>{props.data.humidity + '%'}</span>
                </div>
            ])
        }

        function Widget(props) {
            let data = props.data;
            let content;

            if (data.type === 'graph')  content = <Graph />;
            if (data.image)             content = <Camera />;
            if (data.temperature)       content = <Temperature data={data} />;
            if (data.buttons)           content = createBtns(data.buttons);
            if (data.albumcover)        content = <Pleer data={data} />;

            return (
                <div className={cardClass('ContentItem', [cardClass('Widget')])}>
                    {content}
                </div>
            )
        }

        function Description(props) {
            let widget = props.data ? <Widget data={props.data} /> : '';

            return (
                <div className={cardClass('Content')}>
                    <div className={cardClass('ContentItem', [cardClass('Desc')])}>{data.description}</div>
                    {widget}
                </div>
            )
        }

        let cssClass = cardClass({size: data.size});
        let svgIcon =  data.icon;
        if (data.type === 'critical') {
            cssClass = cardClass({size: data.size, mod: 'crit'});
            svgIcon += '-white';
        };


        let description = data.description ? <Description data={data.data} /> : '';

        return (
            <div className={cssClass}>
                <div className={cardClass('Header')}>
                    <div className={cardClass('Icon')}>
                        <img src={'./assets/img/icons/icon-' + svgIcon + '.svg'} />
                    </div>
                    <h2 className={cardClass('Title')}>{data.title}</h2>
                </div>
                <div className={cardClass('Meta')}>
                    <div className={cardClass('MetaItem')}>{data.source}</div>
                    <div className={cardClass('MetaItem')}>{data.time}</div>
                </div>
                {description}

                <div className={cardClass('Controls')}>
                    <button className={cardClass('Control', {type: 'close'})}></button>
                    <button className={cardClass('Control', {type: 'more'})}></button>
                </div>
            </div>
        );
    }
}

export default Card;
