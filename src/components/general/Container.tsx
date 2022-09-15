import { Container as ChakraContainer, ContainerProps } from '@chakra-ui/react';

export const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <ChakraContainer maxW={{ base: '100%', md: '740px', lg: '900px', xl: '1120px' }} pt="10" {...props}>
      {children}
    </ChakraContainer>
  );
};
