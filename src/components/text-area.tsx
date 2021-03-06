import styled from 'styled-components';

import { handleChangeEvent } from 'services/utils';

import { COLORS } from 'styles/color';
import {
  TextFieldTheme,
  TEXT_FIELD_THEME,
} from './text-field/text-field.constants';

import { RElement } from 'types/react';

export interface TextAreaProps {
  value: string | undefined;

  onChange: (value: string) => void;

  styling?: TextFieldTheme;
  placeholder?: string;
  isDisabled?: boolean;
}

const Wrapper = styled.textarea<{ styling?: TextFieldTheme }>`
  resize: none;
  width: 100%;
  padding: 12px;
  border: 1px solid ${COLORS.spanishGray};
  background-color: ${COLORS.transparent};

  ${(props) => (props.styling ? TEXT_FIELD_THEME[props.styling] : '')}

  &:disabled {
    background-color: ${COLORS.spanishGray};
  }
`;

export const TextArea: RElement<TextAreaProps> = (props) => {
  const { styling, value, className, isDisabled, placeholder, onChange } =
    props;

  return (
    <Wrapper
      onChange={handleChangeEvent(onChange)}
      styling={styling}
      value={value}
      className={className}
      disabled={isDisabled}
      placeholder={placeholder}
    />
  );
};
