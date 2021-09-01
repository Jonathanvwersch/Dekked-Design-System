// Wrapper component for whenever you want to add a box shadow to a component
import React from 'react';
import styled from 'styled-components';
import { SIZES } from '../../typesAndEnums';

interface ShadowCardProps {
  borderRadius?: string;
  height?: string;
  width?: string;
  border?: string;
  backgroundColor?: string;
  position?: string;
  padding?: string;
  cardRef?: React.RefObject<HTMLDivElement>;
  zIndex?: string;
  maxHeight?: string;
  maxWidth?: string;
  id?: string;
  tabIndex?: number;
  ariaLabel?: string;
  role?: string;
  overflow?: string;
  style?: React.CSSProperties;
}

const ShadowCard: React.FC<ShadowCardProps> = ({ children, ...props }) => {
  return (
    <StyledShadowCard
      tabIndex={props.tabIndex}
      aria-label={props.ariaLabel}
      role={props.role}
      id={props.id}
      ref={props.cardRef}
      {...props}
    >
      {children}
    </StyledShadowCard>
  );
};

const StyledShadowCard = styled.div<ShadowCardProps>`
  box-shadow: ${({ theme }) => theme.boxShadow};
  max-height: ${({ maxHeight }) => maxHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  border-radius: ${({ theme, borderRadius }) =>
    borderRadius ? borderRadius : theme.sizes.borderRadius[SIZES.MEDIUM]};
  height: ${({ height }) => height};
  width: ${({ width }) => (width ? width : '100%')};
  border: ${({ border }) => border};
  position: ${({ position }) => position};
  padding: ${({ padding }) => padding};
  z-index: ${({ zIndex }) => zIndex};
  overflow: ${({ overflow }) => overflow || 'hidden'};
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor
      ? backgroundColor
      : theme.colors.backgrounds.pageBackground};
`;

export default ShadowCard;
