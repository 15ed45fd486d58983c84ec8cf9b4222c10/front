import { Colors, Sizes } from 'daskis-ui-kit/dist/types';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IInputRangeProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    size?: Sizes;
    color?: Colors;
    minValue: number;
    maxValue: number;
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
