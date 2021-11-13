import React, { useContext } from 'react';
import { ThemeType } from '../theme/theme';
import { ThemeContext } from 'styled-components';
import { Svg } from '.';
import { IconType } from '../typesAndEnums';

const StarIcon: React.FC<IconType> = ({ color, size, rotate }) => {
  const theme: ThemeType = useContext(ThemeContext);
  const iconColor = color ? color : theme.colors.iconColor;

  return (
    <Svg size={size} rotate={rotate} viewBox="0 0 16 16" fill="none">
      <path
        d="M14.1891 5.51739L10.2219 4.94083L8.44844 1.34551C8.4 1.24708 8.32031 1.16739 8.22187 1.11895C7.975 0.997076 7.675 1.09864 7.55156 1.34551L5.77812 4.94083L1.81094 5.51739C1.70156 5.53301 1.60156 5.58458 1.525 5.6627C1.43244 5.75784 1.38143 5.88583 1.38319 6.01855C1.38495 6.15127 1.43933 6.27786 1.53437 6.37051L4.40469 9.16895L3.72656 13.1205C3.71066 13.2124 3.72083 13.307 3.75592 13.3934C3.79102 13.4798 3.84963 13.5547 3.92511 13.6095C4.00059 13.6644 4.08992 13.6969 4.18297 13.7036C4.27602 13.7102 4.36907 13.6906 4.45156 13.6471L8 11.7815L11.5484 13.6471C11.6453 13.6986 11.7578 13.7158 11.8656 13.6971C12.1375 13.6502 12.3203 13.3924 12.2734 13.1205L11.5953 9.16895L14.4656 6.37051C14.5437 6.29395 14.5953 6.19395 14.6109 6.08458C14.6531 5.81114 14.4625 5.55801 14.1891 5.51739V5.51739ZM10.3875 8.7752L10.9516 12.0611L8 10.5111L5.04844 12.0627L5.6125 8.77676L3.225 6.44864L6.525 5.96895L8 2.97989L9.475 5.96895L12.775 6.44864L10.3875 8.7752Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default StarIcon;
