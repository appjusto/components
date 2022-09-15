import { HStack, Icon, StackProps, Text } from '@chakra-ui/react';
import { MdFilterAlt } from 'react-icons/md'

interface ClearFiltersButtonProps extends StackProps {
  label: string;
  mobLabel?: string;
  clearFunction(): void;
}

export const ClearFiltersButton = ({ label, mobLabel, clearFunction, ...props }: ClearFiltersButtonProps) => {
  // UI
  return (
    <HStack
      spacing={2}
      pl="2"
      pb={{ base: '2', md: '0' }}
      minW={{ base: '82px', lg: '124px' }}
      color="#697667"
      cursor="pointer"
      onClick={clearFunction}
      {...props}
    >
      <Icon as={MdFilterAlt} />
      <Text fontSize="15px" lineHeight="21px" display={{ base: 'none', lg: 'block' }}>
        {label}
      </Text>
      <Text fontSize="15px" lineHeight="21px" display={{ base: 'block', lg: 'none' }}>
        {mobLabel ?? label}
      </Text>
    </HStack>
  );
};
