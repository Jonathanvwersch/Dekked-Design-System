import React from 'react';
import styled from 'styled-components';
import { BoxProps, marginAndPadding } from '../Box/Box';

interface FlexProps {
  backgroundcolor?: string;
  alignItems?: string;
  justifyContent?: string;
  height?: string;
  width?: string;
  minHeight?: string;
  minWidth?: string;
  maxHeight?: string;
  maxWidth?: string;
  id?: string;
  flexDirection?:
    | 'row'
    | 'column'
    | 'inherit'
    | '-moz-initial'
    | 'initial'
    | 'revert'
    | 'unset'
    | 'column-reverse'
    | 'row-reverse';
  className?: string;
  overflow?: string;
  flexWrap?: string;
  style?: React.CSSProperties | undefined;
  display?: string;
  flexGrow?: string;
  displayFlex?: string;
}

type FlexPropsUnion = FlexProps & BoxProps;

const Flex: React.FC<FlexPropsUnion> = ({ children, ...props }) => {
  return (
    <StyledFlex
      style={props.style}
      className={props.className}
      id={props.id}
      {...props}
    >
      {children}
    </StyledFlex>
  );
};

const StyledFlex = styled.div<FlexProps>`
  display: ${({ display }) => display || 'flex'};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  justify-content: ${({ justifyContent }) => justifyContent};
  height: ${({ height }) => height};
  width: ${({ width }) => (width ? width : '100%')};
  min-height: ${({ minHeight }) => minHeight};
  min-width: ${({ minWidth }) => minWidth};
  max-height: ${({ maxHeight }) => maxHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  overflow: ${({ overflow }) => overflow};
  flex: ${({ displayFlex }) => displayFlex};
  ${() => marginAndPadding}
`;

export default Flex;
