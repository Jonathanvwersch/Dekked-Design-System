import React, { ReactElement, useContext } from 'react';
import { createPortal } from 'react-dom';
import { FormattedMessage } from 'react-intl';
import ReactTooltip, { Effect, Offset, Place, Type } from 'react-tooltip';
import styled, { ThemeContext } from 'styled-components';
import { ConditionalWrapper } from '..';
import { SIZES } from '../../typesAndEnums';

interface TooltipProps {
  text: string;
  id: string;
  place?: Place;
  effect?: Effect;
  offset?: Offset;
  textColor?: string;
  backgroundColor?: string;
  type?: Type;
  children?: React.ReactNode;
  isActive?: boolean;
  values?: {};
  tooltipChildrenStyle?: React.CSSProperties | undefined;
}

const Tooltip: React.FC<TooltipProps> = ({
  id,
  place = 'bottom',
  effect = 'solid',
  offset,
  textColor,
  backgroundColor,
  type,
  text,
  children,
  isActive = true,
  values,
  tooltipChildrenStyle,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      {createPortal(
        <StyledTooltip
          multiline
          type={type}
          id={id}
          place={place}
          effect={effect}
          offset={offset}
          textColor={textColor || theme.colors.oppositeFontColor}
          delayShow={500}
          backgroundColor={
            backgroundColor ? backgroundColor : theme.colors.iconColor
          }
        >
          <FormattedMessage id={text} values={values} />
        </StyledTooltip>,
        document.getElementById('modal-overlay')!
      )}

      <ConditionalWrapper
        condition={isActive}
        wrapper={(children: ReactElement) => (
          <TooltipChildren style={tooltipChildrenStyle} data-tip data-for={id}>
            {children}
          </TooltipChildren>
        )}
      >
        {children}
      </ConditionalWrapper>
    </>
  );
};

const StyledTooltip = styled(ReactTooltip).attrs({
  className: 'dekkedTooltip',
})`
  &.dekkedTooltip {
    padding: ${({ theme }) => `${theme.spacers.size4} ${theme.spacers.size8}`};
    font-size: ${({ theme }) => theme.typography.fontSizes.size12};
    border-radius: ${({ theme }) => theme.sizes.borderRadius[SIZES.MEDIUM]};
  }
`;

const TooltipChildren = styled.div`
  display: flex;
`;

export default React.memo(Tooltip);
