import React, { useContext } from 'react';
import { ThemeType } from '../theme/theme';
import { ThemeContext } from 'styled-components';
import { Svg } from '.';
import { IconType } from '../typesAndEnums';
const DividerIcon: React.FC<IconType & { strokeWidth?: string }> = ({
  color,
  size,
  rotate,
  strokeWidth,
}) => {
  const theme: ThemeType = useContext(ThemeContext);
  const iconColor = color ? color : theme.colors.iconColor;

  return (
    <Svg size={size} viewBox="0 0 16 16" fill={iconColor} rotate={rotate}>
      <line
        x1="8.15"
        y1="-6.55671e-09"
        x2="8.15"
        y2="16"
        stroke={iconColor}
        strokeWidth={strokeWidth ? strokeWidth : '0.5'}
      />
    </Svg>
  );
};

export default DividerIcon;
