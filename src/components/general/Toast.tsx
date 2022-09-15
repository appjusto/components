import { Box, HStack, Icon, Text, useToast } from '@chakra-ui/react';
import { MdClose } from 'react-icons/md'
import { RiErrorWarningFill } from 'react-icons/ri'

type Message = { title: string; description?: string };
interface CustomToastProps {
  type: 'success' | 'warning' | 'error';
  message: Message;
}

export const Toast = ({ type, message }: CustomToastProps) => {
  // contex
  const toast = useToast();
  // helpers
  let bg = '#48BB78';
  if (type === 'warning') bg = '#ED8936';
  if (type === 'error') bg = '#E53E3E';
  // UI
  return (
    <Box
      pos="relative"
      color="white"
      p="4"
      bg={bg}
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
        <Icon as={RiErrorWarningFill} />
        <Box>
          <Text>{message.title}</Text>
          {message?.description && <Text fontSize="xs">{message.description}</Text>}
        </Box>
      </HStack>
    </Box>
  );
};
