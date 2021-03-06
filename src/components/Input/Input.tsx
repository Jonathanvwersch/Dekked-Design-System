import React, { ChangeEvent, useContext, useState } from 'react';
import { Flex, Spacer } from '..';
import { SIZES } from '../../typesAndEnums';
import {
  InputIconWrapper,
  InputWrapper,
  Label,
  LabelAndInputWrapper,
  StyledInput,
} from './Input.styles';
import { Text } from '../';
import { ThemeContext } from 'styled-components';
import { ErrorIcon, EyeIcon } from '../../icons';

export interface InputProps {
  id?: string;
  label?: string;
  type?: string;
  value?: string | number | null;
  name?: string;
  isDisabled?: boolean;
  ariaLabel?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  size?: SIZES;
  validate?: () => boolean;
  errorMessage?: string;
  required?: boolean;
  showPassword?: boolean;
  clearButton?: boolean;
  autoFocus?: boolean;
  defaultValue?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  width?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  value,
  name,
  isDisabled,
  ariaLabel,
  placeholder,
  autoFocus,
  inputRef,
  onChange,
  size = SIZES.SMALL,
  validate,
  errorMessage,
  required,
  showPassword,
  // clearButton = false,
  defaultValue,
  width,
}) => {
  const theme = useContext(ThemeContext);
  const [validation, setValidation] = useState<boolean>(true);

  const [inputType, setInputType] = useState<'password' | 'text'>('password');
  const asterisks = !required ? '' : '*';

  return (
    <LabelAndInputWrapper width={width}>
      {label && <Label htmlFor={id}>{`${label} ${asterisks}`}</Label>}
      <Flex width="100%" flexDirection="column" alignItems="flex-start">
        <InputWrapper height={size} error={validate && !validation}>
          <StyledInput
            defaultValue={defaultValue}
            type={type === 'password' ? inputType : type}
            value={value === null ? undefined : value}
            name={name}
            ref={inputRef}
            disabled={isDisabled}
            autoComplete="off"
            autoFocus={autoFocus}
            onBlur={() =>
              typeof validate !== 'undefined' && setValidation(validate())
            }
            onChange={onChange}
            aria-label={ariaLabel}
            placeholder={placeholder}
            id={id}
          />
          {showPassword && (
            <InputIconWrapper
              onClick={() => {
                setInputType(inputType === 'password' ? 'text' : 'password');
              }}
            >
              <EyeIcon color={theme.colors.grey1} />
            </InputIconWrapper>
          )}
          {/* {clearButton && (
            <InputIconWrapper
              onClick={(e) => {
                return null;
              }}
            >
              <ClearIcon color={theme.colors.grey1} />
            </InputIconWrapper>
          )} */}
        </InputWrapper>
        {validate && !validation && errorMessage && (
          <Flex mt={theme.spacers.size4}>
            <ErrorIcon color={theme.colors.danger} />
            <Spacer width={theme.spacers.size8} />
            <Text fontColor={theme.colors.danger}>{errorMessage}</Text>
          </Flex>
        )}
      </Flex>
    </LabelAndInputWrapper>
  );
};

export default Input;
