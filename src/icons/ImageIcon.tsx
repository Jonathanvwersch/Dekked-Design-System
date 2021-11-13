import React, { useContext } from 'react';
import { ThemeType } from '../theme/theme';
import { ThemeContext } from 'styled-components';
import { Svg } from '.';
import { IconType } from '../typesAndEnums';

const ImageIcon: React.FC<IconType> = ({ color, size }) => {
  const theme: ThemeType = useContext(ThemeContext);
  const iconColor = color ? color : theme.colors.iconColor;

  return (
    <Svg size={size} color={color} viewBox="0 0 16 16" fill="none">
      <rect width="16" height="16" fill="white" />
      <path
        d="M1.33325 4.00004C1.33325 3.2928 1.6142 2.61452 2.1143 2.11442C2.6144 1.61433 3.29267 1.33337 3.99992 1.33337H11.9999C12.7072 1.33337 13.3854 1.61433 13.8855 2.11442C14.3856 2.61452 14.6666 3.2928 14.6666 4.00004V12C14.6666 12.7073 14.3856 13.3856 13.8855 13.8857C13.3854 14.3858 12.7072 14.6667 11.9999 14.6667H3.99992C3.29267 14.6667 2.6144 14.3858 2.1143 13.8857C1.6142 13.3856 1.33325 12.7073 1.33325 12V4.00004Z"
        stroke={iconColor}
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.66667 7.33333C6.58714 7.33333 7.33333 6.58714 7.33333 5.66667C7.33333 4.74619 6.58714 4 5.66667 4C4.74619 4 4 4.74619 4 5.66667C4 6.58714 4.74619 7.33333 5.66667 7.33333Z"
        stroke={iconColor}
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.684 8.41399L4 14.6667H12.0887C12.7724 14.6667 13.4281 14.3951 13.9116 13.9116C14.3951 13.4281 14.6667 12.7724 14.6667 12.0887V12C14.6667 11.6893 14.55 11.57 14.34 11.34L11.6533 8.40999C11.5281 8.2734 11.3758 8.16441 11.2061 8.08998C11.0364 8.01554 10.8531 7.97729 10.6678 7.97766C10.4825 7.97804 10.2993 8.01704 10.1299 8.09216C9.96053 8.16729 9.80866 8.2769 9.684 8.41399V8.41399Z"
        stroke={iconColor}
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default ImageIcon;
