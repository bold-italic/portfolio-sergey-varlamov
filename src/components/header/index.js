import { Box, useColorModeValue } from "@chakra-ui/react";
import { MAX_WIDTH } from "config";
import Logo from "../UI/logo";
import Navbar from "./navbar";

const Header = () => {
  const color = useColorModeValue("#ebebeb", "#232332");

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      width="100%"
      boxShadow="md"
      bg={color}
      zIndex="1000"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        h="75px"
        px={[4, 6, 10, 14, 20]}
        maxW={MAX_WIDTH}
        mx="auto"
      >
        <Logo />
        <Navbar />
      </Box>
    </Box>
  );
};

export default Header;
