import React from 'react';
import styled from 'styled-components';

interface TextProps {
  fontSize?: string;
  fontWeight?: string;
  fontColor?: string;
  margin?: string;
  className?: string;
  maxWidth?: string;
  hover?: string;
  filterHover?: boolean; // set to true if you want to apply a filter based hover state
  filterActive?: boolean; // set to true if you want to apply a filter based active state
  textDecoration?: string;
  placeholder?: string;
  textAlign?: string;
  userSelect?: string;
  lineHeight?: string;
  fontFamily?: string;
  whiteSpace?: string;
  overflow?: string;
  textOverflow?: string;
  as?: any;
  style?: React.CSSProperties;
}

const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <StyledText
      placeholder={props.placeholder}
      spellCheck={false}
      className={props.className}
      {...props}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.div<TextProps>`
  font-size: ${({ fontSize, theme }) =>
    fontSize ? fontSize : theme.typography.fontSizes.size12};
  font-family: ${({ fontFamily, theme }) =>
    fontFamily ? fontFamily : theme.typography.fontFamily};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ fontColor, theme }) =>
    fontColor ? fontColor : theme.colors.fontColor};
  margin: 0;
  max-width: ${({ maxWidth }) => maxWidth};
  white-space: ${({ whiteSpace }) => whiteSpace};
  text-decoration: ${({ textDecoration }) => textDecoration};
  text-align: ${({ textAlign }) => textAlign};
  line-height: ${({ lineHeight }) => lineHeight};
  user-select: ${({ userSelect }) => userSelect};
  text-overflow: ${({ textOverflow }) => textOverflow};
  overflow: ${({ overflow }) => overflow};

  &.overflow {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    color: ${({ hover }) => hover};
    filter: ${({ filterHover, theme }) =>
      filterHover ? theme.colors.hover.filter : null};
  }

  &:active {
    filter: ${({ filterActive, theme }) =>
      filterActive ? theme.colors.active.filter : null};
  }

  &:empty:before {
    content: attr(placeholder);
  }
`;

export default Text;
