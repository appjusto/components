import { Button, ButtonProps } from '@chakra-ui/react';
import { BiShareAlt } from 'react-icons/bi';

interface ShareButtonProps extends ButtonProps {
  label: string;
}

export const ShareButton = ({ label, ...props }: ShareButtonProps) => {
  //const { contextDispatch } = usePageContext()
  return (
    <Button
      leftIcon={<BiShareAlt />}
      maxW="240px"
      {...props}
    >
      {label}
    </Button>
  );
};