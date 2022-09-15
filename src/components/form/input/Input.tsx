import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, useMultiStyleConfig } from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react';

export interface InputProps extends ChakraInputProps {
  id: string;
  label?: string;
  placeholder?: string;
  value: string;
  type?: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      placeholder = '',
      value,
      type = 'text',
      handleChange = () => {},
      maxW,
      mt = '16px',
      mb,
      mr,
      ml,
      flex,
      ...props
    }: InputProps,
    ref
  ) => {
    const [isInvalid, setIsInvalid] = useState(false);
    const styles = useMultiStyleConfig('CustomInput', {});
    const controlProps = { maxW, mt, mb, mr, ml, flex };
    const handleValidity = (ev: ChangeEvent<HTMLInputElement>) => {
      if (value !== '' && !ev.target.validity.valid) {
        setIsInvalid(true);
      } else {
        setIsInvalid(false);
      }
    };
    return (
      <FormControl id={id} sx={styles.control} {...controlProps}>
        {label && <FormLabel sx={styles.label}>{label}</FormLabel>}
        <ChakraInput
          ref={ref}
          isInvalid={isInvalid}
          type={type}
          placeholder={placeholder}
          value={value}
          sx={styles.input}
          onChange={handleChange}
          onBlur={handleValidity}
          errorBorderColor="red"
          {...props}
        />
      </FormControl>
    );
  }
);
