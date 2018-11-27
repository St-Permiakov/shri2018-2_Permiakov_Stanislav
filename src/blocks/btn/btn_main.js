import { compose } from '@bem-react/core';

import { Btn as Base } from './btn';
import { BtnModPrimary } from './btn_types/btn_primary';

export const Btn = compose(
    BtnModPrimary
)(Base);