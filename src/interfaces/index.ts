import { typeIcons } from '../assets/icons/Icon';

export interface IIconsProps {
  type?: typeIcons;
  width?: number;
  height?: number;
  color?: string;
  text?: string | undefined;
  textColor?: string;
  onClick?: any;
  isFilled?: boolean;
}
