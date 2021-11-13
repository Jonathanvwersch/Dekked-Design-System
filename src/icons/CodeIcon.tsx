import React, { useContext } from 'react';
import { ThemeType } from '../theme/theme';
import { ThemeContext } from 'styled-components';
import { Svg } from '.';
import { IconType } from '../typesAndEnums';

const CodeIcon: React.FC<IconType> = ({ color, size }) => {
  const theme: ThemeType = useContext(ThemeContext);
  const iconColor = color ? color : theme.colors.iconColor;

  return (
    <Svg size={size} viewBox="0 0 16 16" fill="none">
      <g clipPath="url(#clip0)">
        <path
          d="M4.57529 11.8C4.37948 11.8003 4.19041 11.7286 4.04409 11.5984L-0.00390625 8.00003L4.26889 4.20163C4.42816 4.06538 4.63453 3.99708 4.84363 4.01141C5.05273 4.02573 5.24785 4.12155 5.38704 4.27824C5.52624 4.43494 5.59838 4.64 5.58795 4.84933C5.57752 5.05866 5.48537 5.25554 5.33129 5.39763L2.40409 8.00003L5.10649 10.4016C5.2279 10.5094 5.31367 10.6515 5.35241 10.8091C5.39115 10.9667 5.38103 11.1324 5.3234 11.2841C5.26576 11.4358 5.16333 11.5665 5.02971 11.6586C4.89609 11.7508 4.73761 11.8001 4.57529 11.8V11.8ZM11.7313 11.7984L16.0041 8.00003L11.9561 4.40163C11.7975 4.26074 11.5894 4.18863 11.3777 4.20116C11.1659 4.21369 10.9678 4.30983 10.8269 4.46843C10.686 4.62703 10.6139 4.83509 10.6264 5.04686C10.639 5.25863 10.7351 5.45674 10.8937 5.59763L13.5961 8.00003L10.6689 10.6016C10.5102 10.7425 10.4139 10.9407 10.4013 11.1525C10.3887 11.3643 10.4608 11.5725 10.6017 11.7312C10.7426 11.8899 10.9407 11.9862 11.1526 11.9988C11.3644 12.0114 11.5726 11.9393 11.7313 11.7984V11.7984ZM7.98889 12.932L9.58889 3.33203C9.60935 3.22711 9.60858 3.11915 9.58662 3.01454C9.56466 2.90993 9.52195 2.81078 9.46103 2.72294C9.4001 2.63511 9.32219 2.56038 9.2319 2.50316C9.14161 2.44595 9.04077 2.4074 8.93533 2.38981C8.8299 2.37222 8.722 2.37594 8.61803 2.40075C8.51405 2.42555 8.4161 2.47095 8.32997 2.53424C8.24383 2.59754 8.17125 2.67746 8.11651 2.76928C8.06178 2.86109 8.026 2.96295 8.01129 3.06883L6.41129 12.6688C6.39083 12.7737 6.39161 12.8817 6.41357 12.9863C6.43553 13.0909 6.47824 13.1901 6.53916 13.2779C6.60009 13.3657 6.67799 13.4405 6.76829 13.4977C6.85858 13.5549 6.95942 13.5934 7.06485 13.611C7.17029 13.6286 7.27818 13.6249 7.38216 13.6001C7.48614 13.5753 7.58408 13.5299 7.67022 13.4666C7.75636 13.4033 7.82894 13.3234 7.88367 13.2316C7.93841 13.1398 7.97419 13.0379 7.98889 12.932V12.932Z"
          fill={iconColor}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default CodeIcon;
