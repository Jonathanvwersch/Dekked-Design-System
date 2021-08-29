import React, { ReactNode } from 'react';
import { ComponentLoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { BUTTON_THEME, BUTTON_TYPES, SIZES } from '../../typesAndEnums';
import styled from 'styled-components';
import { StyledButton } from './Button.styles';

interface ButtonProps {
  children: ReactNode;
  type?: BUTTON_TYPES;
  className?: string;
  fullWidth?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  buttonStyle?: BUTTON_THEME;
  handleClick?: (args?: any) => any;
  size?: SIZES;
  width?: SIZES | string;
  fontSize?: string;
  borderRadius?: string;
  ariaLabel?: string;
  id?: string;
  as?: any;
  fontWeight?: string;
}

const Button: React.FC<ButtonProps> = ({
  type,
  isLoading = false,
  handleClick,
  children,
  isDisabled = false,
  buttonStyle = BUTTON_THEME.PRIMARY,
  fullWidth = false,
  size = SIZES.SMALL,
  width,
  className,
  fontSize,
  borderRadius,
  ariaLabel,
  id,
  fontWeight,
  ...props
}) => {
  const buttonClassName = className ? className : fullWidth ? 'fullWidth' : '';

  return (
    <StyledButton
      id={id}
      type={type}
      disabled={isDisabled || isLoading}
      isLoading={isLoading}
      onClick={handleClick}
      size={size}
      className={buttonClassName}
      width={width}
      borderRadius={borderRadius}
      aria-label={ariaLabel}
      fontSize={fontSize}
      buttonStyle={buttonStyle}
      fontWeight={fontWeight}
      {...props}
    >
      {isLoading ? (
        <>
          <StyledSpan>{children}</StyledSpan>
          <StyledSpinner size={SIZES.SMALL} />
        </>
      ) : (
        children
      )}
    </StyledButton>
  );
};

const StyledSpinner = styled(ComponentLoadingSpinner)`
  position: absolute;
  width: 100%;
`;

const StyledSpan = styled.span`
  visibility: hidden;
  z-index: 0;
`;

export default Button;
