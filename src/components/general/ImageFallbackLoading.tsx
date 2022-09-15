import { Flex, FlexProps, Spinner } from '@chakra-ui/react';

interface ImageFallbackLoadingProps extends FlexProps {
  spinnerSize?: string;
}

export const ImageFallbackLoading = ({ spinnerSize = 'sm', ...props }: ImageFallbackLoadingProps) => {
  return (
    <Flex
      bg="gray.50"
      borderWidth="1px"
      borderColor="gray.500"
      borderRadius="lg"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      <Spinner size={spinnerSize} />
    </Flex>
  );
};
