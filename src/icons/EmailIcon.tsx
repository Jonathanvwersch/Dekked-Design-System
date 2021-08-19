import React, { useContext } from 'react';
import { ThemeType } from '../theme/theme';
import { ThemeContext } from 'styled-components';
import { Svg } from '.';
import { IconType } from '../typesAndEnums';

const EmailIcon: React.FC<IconType> = ({ color, size }) => {
  const theme: ThemeType = useContext(ThemeContext);
  const iconColor = color ? color : theme.colors.iconColor;

  return (
    <Svg color={color} size={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M14 3H2C1.73478 3 1.48043 3.10536 1.29289 3.29289C1.10536 3.48043 1 3.73478 1 4V12C1 12.2652 1.10536 12.5196 1.29289 12.7071C1.48043 12.8946 1.73478 13 2 13H14C14.2652 13 14.5196 12.8946 14.7071 12.7071C14.8946 12.5196 15 12.2652 15 12V4C15 3.73478 14.8946 3.48043 14.7071 3.29289C14.5196 3.10536 14.2652 3 14 3V3ZM12.9 4L8 7.39L3.1 4H12.9ZM2 12V4.455L7.715 8.41C7.7987 8.46806 7.89813 8.49918 8 8.49918C8.10187 8.49918 8.2013 8.46806 8.285 8.41L14 4.455V12H2Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default EmailIcon;
