import {
  FormControl,
  FormLabel,
  Input,
  InputProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import React from 'react';
import {
  coordinatesOnlyParser,
  numbersOnlyParser,
} from './pattern-input/parsers';

interface NumberInputProps extends InputProps {
  id: string;
  label?: string;
  value: string;
  maxLength?: number;
  isCoordinates?: boolean;
}

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      id,
      label,
      value,
      maxLength,
      mt = '16px',
      mb,
      ml,
      mr,
      flex,
      isCoordinates,
      ...props
    }: NumberInputProps,
    ref
  ) => {
    const [state, setState] = React.useState('');
    const controlProps = { mt, mb, ml, mr, flex };
    const styles = useMultiStyleConfig('CustomInput', {});
    React.useLayoutEffect(() => {
      const newState = isCoordinates
        ? coordinatesOnlyParser(value)
        : numbersOnlyParser(value);
      setState((prevState) => {
        if (maxLength && newState.length < maxLength) {
          return newState;
        } else if (maxLength && prevState.length === maxLength) {
          return prevState;
        } else {
          return newState;
        }
      });
    }, [value, maxLength, isCoordinates]);
    return (
      <FormControl id={id} sx={styles.control} {...controlProps}>
        {label && <FormLabel sx={styles.label}>{label}</FormLabel>}
        <Input ref={ref} value={state} sx={styles.input} {...props} />
      </FormControl>
    );
  }
);
