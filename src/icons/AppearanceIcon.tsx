import React, { useContext } from "react";
import { ThemeType } from "../styles/theme";
import { ThemeContext } from "styled-components";
import { Svg, IconProps } from ".";

const AppearanceIcon: React.FC<IconProps> = ({ color, size }) => {
  const theme: ThemeType = useContext(ThemeContext);
  const iconColor = color ? color : theme.colors.iconColor;

  return (
    <Svg size={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M11.584 8.84801L5.92799 3.19201L7.12799 1.99201C7.52799 1.54401 8.96799 1.61601 9.93599 2.24801C10.904 2.88801 11.08 3.27201 12.264 3.92801C13.208 4.44001 14.224 4.93601 15.824 4.60801L11.584 8.84801ZM11.016 9.41601L5.35999 3.76001L3.94399 5.17601C3.86982 5.25003 3.81099 5.33794 3.77084 5.43471C3.73069 5.53149 3.71003 5.63524 3.71003 5.74001C3.71003 5.84479 3.73069 5.94854 3.77084 6.04531C3.81099 6.14209 3.86982 6.23 3.94399 6.30401L4.79199 7.15201C5.10399 7.46401 5.10399 7.97601 4.79199 8.28801C4.31199 8.76801 3.64799 9.17601 3.02399 9.64001C2.74399 9.84801 2.46399 10.064 2.21599 10.312C1.14399 11.384 0.319986 12.864 1.11999 13.656C1.91199 14.456 3.39199 13.632 4.46399 12.568C4.71199 12.32 4.92799 12.04 5.14399 11.752C5.59999 11.128 6.00799 10.464 6.49599 9.98401C6.57 9.90985 6.65791 9.85101 6.75469 9.81087C6.85147 9.77072 6.95521 9.75006 7.05999 9.75006C7.16476 9.75006 7.26851 9.77072 7.36529 9.81087C7.46206 9.85101 7.54998 9.90985 7.62399 9.98401L8.47199 10.832C8.78399 11.144 9.28799 11.144 9.59999 10.832L11.016 9.41601Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default AppearanceIcon;
