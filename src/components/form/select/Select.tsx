import {
  FormControl,
  FormLabel,
  Icon,
  Select as ChakraSelect,
  SelectProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import React from 'react';
import { MdArrowDownward } from 'react-icons/md';

interface Props extends SelectProps {
  label?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, Props>(
  ({ label, w, maxW, mt = '4', mb, ml, mr, flex, ...props }: Props, ref) => {
    const boxProps = { w, maxW, mt, mb, ml, mr, flex };
    const styles = useMultiStyleConfig('Select', {});
    return (
      <FormControl sx={styles.control} {...boxProps}>
        {label && (
          <FormLabel htmlFor={props.id} sx={styles.label} textStyle="inputLabel">
            {label}
          </FormLabel>
        )}
        <ChakraSelect ref={ref} size="md" sx={styles.select} icon={<Icon as={MdArrowDownward} />} {...props} />
      </FormControl>
    );
  }
);
