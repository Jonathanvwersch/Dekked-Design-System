import React, { useContext } from 'react';
import { ThemeType } from '../theme/theme';
import { ThemeContext } from 'styled-components';
import { Svg } from '.';
import { IconType } from '../typesAndEnums';

const RecentlyViewedIcon: React.FC<IconType> = ({ color, size, rotate }) => {
  const theme: ThemeType = useContext(ThemeContext);
  const iconColor = color ? color : theme.colors.iconColor;

  return (
    <Svg size={size} rotate={rotate} viewBox="0 0 16 16" fill="none">
      <path
        d="M10.295 11L7.5 8.205V3.5H8.5V7.79L11 10.295L10.295 11Z"
        fill={iconColor}
      />
      <path
        d="M8 1C7.06748 1.00013 6.14446 1.18739 5.28562 1.55068C4.42677 1.91397 3.64955 2.44591 3 3.115V1H2V5H6V4H3.54C4.47801 2.95765 5.75149 2.27676 7.13926 2.0756C8.52703 1.87444 9.94142 2.16571 11.1368 2.89882C12.3322 3.63193 13.233 4.76057 13.6829 6.08873C14.1327 7.41689 14.1032 8.86066 13.5993 10.1693C13.0955 11.4779 12.1492 12.5688 10.9249 13.2523C9.7005 13.9359 8.27537 14.1691 6.897 13.9113C5.51862 13.6535 4.27407 12.9211 3.3795 11.8412C2.48492 10.7614 1.99683 9.40227 2 8H1C1 9.38447 1.41054 10.7378 2.17971 11.889C2.94888 13.0401 4.04213 13.9373 5.32122 14.4672C6.6003 14.997 8.00777 15.1356 9.36563 14.8655C10.7235 14.5954 11.9708 13.9287 12.9497 12.9497C13.9287 11.9708 14.5954 10.7235 14.8655 9.36563C15.1356 8.00777 14.997 6.6003 14.4672 5.32122C13.9373 4.04213 13.0401 2.94888 11.889 2.17971C10.7378 1.41054 9.38447 1 8 1V1Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default RecentlyViewedIcon;
