import { ButtonProps, IconButton, Icon } from '@chakra-ui/react';
import { FiEdit3 } from 'react-icons/fi';
import React from 'react';

export const EditButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <IconButton
    ref={ref}
    size="sm"
    borderColor="gray.50"
    ml="4"
    aria-label="Edit product"
    variant="outline"
    icon={<Icon as={FiEdit3} />}
    {...props}
  />
));
