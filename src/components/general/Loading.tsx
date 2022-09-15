import { Center, Image, Progress } from '@chakra-ui/react';
import React from 'react';

interface LoadingProps {
  image: string;
  imageW: string;
  imageH: string;
  timeout?: number; // in seconds
}

export const Loading = ({ image, imageW, imageH, timeout = 3 }: LoadingProps) => {
  // state
  const [timer, setTimer] = React.useState(0);
  // side effects
  React.useEffect(() => {
    const timer = setInterval(() => setTimer((prev) => prev + 100 / timeout), 1000);
    return () => clearInterval(timer);
  }, [timeout]);
  // UI
  return (
    <Center h="100vh" flexDirection="column">
      <Progress position="absolute" top="0" w="full" value={timer} size="xs" />
      <Image src={image} w={imageW} h={imageH}/>
    </Center>
  );
};
