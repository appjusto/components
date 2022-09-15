import { MdClose } from 'react-icons/md';
import { Button, ButtonProps, Icon } from '@chakra-ui/react';
import React from 'react';

export const CloseButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <Button
      ref={ref}
      variant="outline"
      ml="2"
      minW="30px"
      w="32px"
      h="32px"
      p="0"
      borderColor="#F2F6EA"
      aria-label="Undo"
      {...props}
    >
      <Icon as={MdClose} />
    </Button>
  );
});
