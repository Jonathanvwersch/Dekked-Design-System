import React, { useContext } from 'react';
import { Svg, IconProps } from '.';

import { ThemeContext } from 'styled-components';
import { ThemeType } from '../styles/theme';

const BoldIcon: React.FC<IconProps> = ({ color, size }) => {
  const theme: ThemeType = useContext(ThemeContext);
  const iconColor = color ? color : theme.colors.iconColor;

  return (
    <Svg size={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M8.52536 11.3C10.5454 11.04 11.9987 9.22667 11.9987 7.19333V2.83333C11.9987 2.61232 11.9109 2.40036 11.7546 2.24408C11.5983 2.0878 11.3864 2 11.1654 2C10.9444 2 10.7324 2.0878 10.5761 2.24408C10.4198 2.40036 10.332 2.61232 10.332 2.83333V7.26667C10.332 8.38 9.5787 9.39333 8.48536 9.61333C8.14537 9.6866 7.79329 9.68279 7.45497 9.60221C7.11664 9.52162 6.80065 9.36629 6.53019 9.14762C6.25974 8.92896 6.04168 8.65251 5.89203 8.33856C5.74238 8.0246 5.66493 7.68113 5.66536 7.33333V2.83333C5.66536 2.61232 5.57757 2.40036 5.42129 2.24408C5.26501 2.0878 5.05305 2 4.83203 2C4.61102 2 4.39906 2.0878 4.24278 2.24408C4.0865 2.40036 3.9987 2.61232 3.9987 2.83333V7.33333C3.9987 9.71333 6.08536 11.6133 8.52536 11.3ZM3.33203 13.3333C3.33203 13.7 3.63203 14 3.9987 14H11.9987C12.3654 14 12.6654 13.7 12.6654 13.3333C12.6654 12.9667 12.3654 12.6667 11.9987 12.6667H3.9987C3.63203 12.6667 3.33203 12.9667 3.33203 13.3333Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default BoldIcon;
