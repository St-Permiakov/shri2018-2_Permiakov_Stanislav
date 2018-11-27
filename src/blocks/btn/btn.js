import React from 'react';
import { cn } from '@bem-react/classname';
import './btn.css';

const btnClass = cn('Btn');

export const Btn = ({ mod, className, text }) => (
    <button className={btnClass({mod: mod}, [className])}><span>{text}</span></button>
);