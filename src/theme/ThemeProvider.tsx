import { ChakraProvider } from "@chakra-ui/react"; 
import { default as theme } from './theme';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const ThemeProvider = ({ children }: Props) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  );
};