import React, { useContext } from 'react';
import { ThemeType } from '../theme/theme';
import { ThemeContext } from 'styled-components';
import { Svg } from '.';
import { IconType } from '../typesAndEnums';

const EmptyStarIcon: React.FC<IconType> = ({ color, size, rotate }) => {
  const theme: ThemeType = useContext(ThemeContext);
  const iconColor = color ? color : theme.colors.iconColor;

  return (
    <Svg size={size} rotate={rotate} viewBox="0 0 16 16" fill="none">
      <path
        d="M7.38267 1.7555C7.59601 1.19283 8.40334 1.19283 8.61734 1.7555L9.99734 5.57816C10.094 5.8315 10.34 6.00016 10.6147 6.00016H14.006C14.6327 6.00016 14.906 6.78016 14.4133 7.16216L12 9.3335C11.8919 9.4166 11.8129 9.53181 11.7743 9.6626C11.7358 9.79339 11.7396 9.93303 11.7853 10.0615L12.6667 13.7968C12.8813 14.3968 12.1867 14.9122 11.6613 14.5428L8.38334 12.4628C8.27108 12.3839 8.13721 12.3416 8.00001 12.3416C7.8628 12.3416 7.72893 12.3839 7.61667 12.4628L4.33867 14.5428C3.81401 14.9122 3.11867 14.3962 3.33334 13.7968L4.21467 10.0615C4.26039 9.93303 4.26424 9.79339 4.22568 9.6626C4.18711 9.53181 4.10811 9.4166 4.00001 9.3335L1.58667 7.16216C1.09334 6.78016 1.36801 6.00016 1.99334 6.00016H5.38467C5.5182 6.00061 5.64872 5.9605 5.75895 5.88514C5.86918 5.80979 5.95394 5.70274 6.00201 5.57816L7.38201 1.7555H7.38267Z"
        stroke={iconColor}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default EmptyStarIcon;
