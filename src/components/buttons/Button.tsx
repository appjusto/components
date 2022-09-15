import { Button as ChakraButton, ButtonProps, Link } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface Props extends ButtonProps {
  label: string;
  link?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ label, link, isExternal = false, ...props }, ref) => {
    if (link) {
      if (isExternal) {
        return (
          <Link href={link} isExternal _hover={{ textDecor: 'none' }}>
            <ChakraButton ref={ref} mt="16px" display="block" {...props}>
              {label}
            </ChakraButton>
          </Link>
        );
      }
      return (
        <Link as={RouterLink} to={link} _hover={{ textDecor: 'none' }}>
          <ChakraButton ref={ref} mt="16px" {...props}>
            {label}
          </ChakraButton>
        </Link>
      );
    }
    return (
      <ChakraButton ref={ref} width="100%" maxW="220px" h="60px" mt="16px" {...props}>
        {label}
      </ChakraButton>
    );
  }
);
