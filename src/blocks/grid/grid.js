import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import './grid.css';
import Card from '../card/card';
import { events } from './events.json';

class Grid extends Component {
    createGrid = (events) => {
        const cards = [];

        for (let i = 0; i < events.length; i++) {
            const card = events[i];
            cards.push(<Card data={card} key={i} />);
        }

        return cards;
    }

    render() {
        const cssGrid = cn('Grid');

        return (
            <div className={cssGrid()}>
                {this.createGrid(events)}
            </div>
        );
    }
}

export default Grid;
