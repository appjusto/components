// import { BellIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Box, BoxProps, Button, HStack, Icon, Text, useToast } from '@chakra-ui/react';
import { MdClose } from 'react-icons/md';
import { FaBell } from 'react-icons/fa';

interface AutoPlayToastProps extends BoxProps {
  label: string;
}

export const AutoPlayToast = ({ label }: AutoPlayToastProps) => {
  // contex
  const toast = useToast();
  // UI
  return (
    <Box
      pos="relative"
      color="white"
      p="8"
      bg="#F6F6F6"
      border="1px solid black"
      borderRadius="lg"
      w={{ base: '100%', md: 'auto' }}
      maxW={{ base: '100vw', md: 'auto' }}
    >
      <Icon
        as={MdClose}
        pos="absolute"
        top="2"
        right="3"
        cursor="pointer"
        onClick={() => toast.closeAll()}
      />
      <HStack spacing={4} pr="6">
        <Icon as={FaBell} color="black" />
        <Box>
          <Text color="black">{label}</Text>
        </Box>
        <Button size="md" onClick={() => toast.closeAll()}>
          Ok
        </Button>
      </HStack>
    </Box>
  );
};
