import { extendTheme, ThemeConfig } from "@chakra-ui/react"; 
// Foundations 
import * as foundations from "./foundations";
// Components 
import * as components from "./components";
// Chakra Configuration on Initial Mode
const config: ThemeConfig = { 
   initialColorMode: "dark",
   useSystemColorMode: false,
};
const theme = extendTheme({ 
    config,
    ...foundations,
    components:{
    ...components,
    },
 });

export default theme;