import { Button, ButtonProps, Icon } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';

interface SearchButtonProps extends ButtonProps {
  label?: string;
}

export const SearchButton = ({ label = 'Buscar', ...props }: SearchButtonProps) => {
  return (
    <Button h="60px" px="10" fontSize="15px" {...props}>
      <Icon as={BiSearch} mr="1" />
      {label}
    </Button>
  );
};
