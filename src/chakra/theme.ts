// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  
  styles: {
    global: () => ({
      body: {
        bg: "#1E1E1E",
        color: "white"
      },
    }),
  },
});
