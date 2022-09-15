import { PlatformAccess } from '@appjusto/types';
import { Box, Center, Image, Stack, Text } from '@chakra-ui/react';

interface MaintenanceBoxProps {
  image: string;
  imageW: string;
  imageH: string;
  platformAccess?: PlatformAccess;
}

export const MaintenanceBox = ({ image, imageW = "42px", imageH = "42px", platformAccess }: MaintenanceBoxProps) => {
  // UI
  if (!platformAccess?.maintenance.active) return <Box />;
  return (
    <Stack
      mt="8"
      p="6"
      w="100%"
      direction={{ base: 'column', md: 'row' }}
      alignItems="center"
      border="1px solid #C8D7CB"
      borderRadius="lg"
      bgColor="#F6F6F6"
      spacing={4}
    >
      <Stack w="100%" direction={{ base: 'column', md: 'row' }} spacing={4} alignItems="center">
        <Center w="90px" h="90px" bgColor="#fff" borderRadius="45px" overflow="hidden">
          <Image src={image} w={imageW} h={imageH} />
        </Center>
        <Box maxW="700px">
          <Text mt="1" color="black" fontSize="18px" lineHeight="26px" fontWeight="700">
            {platformAccess.maintenance.header}
          </Text>
          {platformAccess.maintenance.body?.map((text: string) => (
            <Text
              key={text}
              mt="2"
              color="black"
              minW="140px"
              fontSize="16px"
              lineHeight="22px"
              fontWeight="500"
            >
              {text}
            </Text>
          ))}
        </Box>
      </Stack>
    </Stack>
  );
};
