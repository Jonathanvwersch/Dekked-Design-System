import React, { useContext } from "react";
import { ThemeType } from "../styles/theme";
import { ThemeContext } from "styled-components";
import { Svg, IconProps } from ".";

const AccountIcon: React.FC<IconProps> = ({ color, size }) => {
  const theme: ThemeType = useContext(ThemeContext);
  const iconColor = color ? color : theme.colors.iconColor;

  return (
    <Svg size={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M8.33333 4.26667C8.51718 4.26667 8.69923 4.30288 8.86909 4.37324C9.03895 4.44359 9.19328 4.54672 9.32328 4.67672C9.45328 4.80672 9.55641 4.96105 9.62676 5.13091C9.69712 5.30077 9.73333 5.48282 9.73333 5.66667C9.73333 5.85052 9.69712 6.03257 9.62676 6.20242C9.55641 6.37228 9.45328 6.52661 9.32328 6.65662C9.19328 6.78662 9.03895 6.88974 8.86909 6.9601C8.69923 7.03045 8.51718 7.06667 8.33333 7.06667C7.96203 7.06667 7.60593 6.91917 7.34338 6.65662C7.08083 6.39407 6.93333 6.03797 6.93333 5.66667C6.93333 5.29536 7.08083 4.93927 7.34338 4.67672C7.60593 4.41417 7.96203 4.26667 8.33333 4.26667ZM8.33333 10.2667C10.3133 10.2667 12.4 11.24 12.4 11.6667V12.4H4.26667V11.6667C4.26667 11.24 6.35333 10.2667 8.33333 10.2667ZM8.33333 3C6.86 3 5.66667 4.19333 5.66667 5.66667C5.66667 7.14 6.86 8.33333 8.33333 8.33333C9.80667 8.33333 11 7.14 11 5.66667C11 4.19333 9.80667 3 8.33333 3ZM8.33333 9C6.55333 9 3 9.89333 3 11.6667V13.6667H13.6667V11.6667C13.6667 9.89333 10.1133 9 8.33333 9Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default AccountIcon;
