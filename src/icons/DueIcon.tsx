import React, { useContext } from 'react';
import { ThemeType } from '../theme/theme';
import { ThemeContext } from 'styled-components';
import { Svg } from '.';
import { IconType } from '../typesAndEnums';

const DueIcon: React.FC<IconType> = ({ color, size, rotate }) => {
  const theme: ThemeType = useContext(ThemeContext);
  const iconColor = color ? color : theme.colors.iconColor;

  return (
    <Svg size={size} rotate={rotate} viewBox="0 0 16 16" fill="none">
      <path
        d="M6.14599 7.14592C6.19244 7.09935 6.24761 7.06241 6.30836 7.0372C6.3691 7.012 6.43423 6.99902 6.49999 6.99902C6.56576 6.99902 6.63088 7.012 6.69163 7.0372C6.75237 7.06241 6.80755 7.09935 6.85399 7.14592L7.99999 8.29292L9.14599 7.14592C9.23988 7.05203 9.36722 6.99929 9.49999 6.99929C9.63277 6.99929 9.76011 7.05203 9.85399 7.14592C9.94788 7.2398 10.0006 7.36714 10.0006 7.49992C10.0006 7.63269 9.94788 7.76003 9.85399 7.85392L8.70699 8.99992L9.85399 10.1459C9.94788 10.2398 10.0006 10.3671 10.0006 10.4999C10.0006 10.6327 9.94788 10.76 9.85399 10.8539C9.76011 10.9478 9.63277 11.0005 9.49999 11.0005C9.36722 11.0005 9.23988 10.9478 9.14599 10.8539L7.99999 9.70692L6.85399 10.8539C6.76011 10.9478 6.63277 11.0005 6.49999 11.0005C6.36722 11.0005 6.23988 10.9478 6.14599 10.8539C6.05211 10.76 5.99936 10.6327 5.99936 10.4999C5.99936 10.3671 6.05211 10.2398 6.14599 10.1459L7.29299 8.99992L6.14599 7.85392C6.09943 7.80747 6.06249 7.7523 6.03728 7.69155C6.01207 7.63081 5.9991 7.56568 5.9991 7.49992C5.9991 7.43415 6.01207 7.36903 6.03728 7.30828C6.06249 7.24754 6.09943 7.19236 6.14599 7.14592Z"
        fill={iconColor}
      />
      <path
        d="M3.5 0C3.63261 0 3.75979 0.0526784 3.85355 0.146447C3.94732 0.240215 4 0.367392 4 0.5V1H12V0.5C12 0.367392 12.0527 0.240215 12.1464 0.146447C12.2402 0.0526784 12.3674 0 12.5 0C12.6326 0 12.7598 0.0526784 12.8536 0.146447C12.9473 0.240215 13 0.367392 13 0.5V1H14C14.5304 1 15.0391 1.21071 15.4142 1.58579C15.7893 1.96086 16 2.46957 16 3V14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14V3C0 2.46957 0.210714 1.96086 0.585786 1.58579C0.960859 1.21071 1.46957 1 2 1H3V0.5C3 0.367392 3.05268 0.240215 3.14645 0.146447C3.24021 0.0526784 3.36739 0 3.5 0V0ZM1 4V14C1 14.2652 1.10536 14.5196 1.29289 14.7071C1.48043 14.8946 1.73478 15 2 15H14C14.2652 15 14.5196 14.8946 14.7071 14.7071C14.8946 14.5196 15 14.2652 15 14V4H1Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default DueIcon;