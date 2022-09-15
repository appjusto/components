import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Container } from './Container';

interface CookiesBarProps {
  userConsent?: string;
  handleUserConsent(value: string): void;
}

export const CookiesBar = ({userConsent, handleUserConsent}: CookiesBarProps) => {
  // UI
  if (userConsent !== 'pending') return <Box />;
  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      w="100%"
      bgColor="#FFE493"
      zIndex="9999"
    >
      <Container p="4">
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ base: 'flex-start', md: 'center' }}
        >
          <Box>
            <Text>
              <strong>Política de cookies:</strong> nós usamos cookies e outras tecnologias
              semelhantes para melhorar a sua experiência. Ao utilizar nossos serviços, você
              concorda com tal monitoramento. Se preferir, você pode{' '}
              <Text
                as="span"
                cursor="pointer"
                textDecor="underline"
                onClick={() => handleUserConsent('refused')}
              >
                recusar este monitoramento.
              </Text>
            </Text>
          </Box>
          <Button
            variant="basic"
            bgColor="white"
            size="lg"
            w="132px"
            mt={{ base: '6', md: '0' }}
            ml={{ md: '8' }}
            onClick={() => handleUserConsent('accepted')}
          >
            Aceitar
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};
