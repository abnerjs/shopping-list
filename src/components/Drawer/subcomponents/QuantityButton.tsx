import { Icon } from '@iconify/react';
import {
  NumberInputProps,
  Unstable_NumberInput as BaseNumberInput,
} from '@mui/base/Unstable_NumberInput';
import { styled } from '@mui/system';
import * as React from 'react';

const NumberInput = React.forwardRef(function CustomNumberInput(
  props: NumberInputProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <Icon icon="fluent:add-12-filled" />,
          className: 'increment',
        },
        decrementButton: {
          children: <Icon icon="fluent:subtract-12-filled" />,
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

type StyledInputProps = {
  value: number;
  onChange: (value: number) => void;
};

export default function QuantityInput({ value, onChange }: StyledInputProps) {
  return (
    <NumberInput
      onChange={(event, value) => {
        onChange(value || 0);
      }}
      value={value}
      aria-label="Quantity Input"
      min={0}
    />
  );
}

const StyledInputRoot = styled('div')(
  () => `
  font-family: Montserrat, sans-serif;
  color: #000;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
  }
`,
);

const StyledInput = styled('input')(
  () => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1;
  color: #000;
  background: '#fff';
  outline: 0;
  min-width: 0;
  width: 1.5rem;
  text-align: center;
  border-left: 1px solid #F5F5F5;
  border-right: 1px solid #F5F5F5;
  border-top: none;
  border-bottom: none;

  &:focus-visible {
    outline: 0;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,
);

const StyledButton = styled('button')(
  () => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.5;
  background: #FFF;
  color: #888;
  width: 24px;
  height: 24px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;
  border: none;
  transition: background-color .3s ease-in-out !important;

  &:hover {
    cursor: pointer;
    background: #F5F5F5;
  }

  &:focus-visible {
    outline: 0;
  }

  &.increment {
    order: 1;
  }
`,
);
