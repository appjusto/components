import {
  FormControl,
  FormLabel,
  Textarea as ChakraTextarea,
  TextareaProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import React from 'react';

interface Props extends TextareaProps {
  id: string;
  label?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ id, label, mt = '16px', mb, ml, mr, flex, ...props }: Props, ref) => {
    const controlProps = { mt, mb, ml, mr, flex };
    const styles = useMultiStyleConfig('CustomTextarea', {});
    return (
      <FormControl id={id} sx={styles.control} {...controlProps}>
        {label && <FormLabel sx={styles.label}>{label}</FormLabel>}
        <ChakraTextarea ref={ref} sx={styles.input} {...props} />
      </FormControl>
    );
  }
);
