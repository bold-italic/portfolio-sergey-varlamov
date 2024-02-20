import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: ({ colorMode }) => ({
    "html, body": {
      fontSize: "18px",
      backgroundColor: colorMode === "light" ? "#ebebeb" : "#232332",
    },
  }),
};

const fonts = {
  heading: "Poppins, -apple-system",
  body: "Poppins, -apple-system",
};

const dividerStyles = {
  baseStyle: {
    borderColor: "telegram.700",
    borderWidth: "1px",
  },
};

const theme = extendTheme({
  styles,
  fonts,
  components: {
    Divider: dividerStyles,
  },
});

export default theme;
