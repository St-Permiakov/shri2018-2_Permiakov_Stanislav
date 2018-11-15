import React from 'react';
import { withBemMod } from '@bem-react/core';

import './btn_primary.css';

const BtnPrimary = (Base, {className, text}) => (
    <button className={className}><span>{text}</span></button>
)

export const BtnModPrimary = withBemMod('Btn', { mod: 'primary' }, BtnPrimary);