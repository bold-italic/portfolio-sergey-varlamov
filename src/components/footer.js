import { Box, Text } from "@chakra-ui/react";

import { MAX_WIDTH } from "config";
import SocialAccounts from "@/components/socialAccounts";

const Footer = () => {
  return (
    <Box as="footer">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        minH="4rem"
        px={[4, 6, 10, 14, 20]}
        pt={8}
        maxW={MAX_WIDTH}
        mx="auto"
      >
        <SocialAccounts />
        <Box py="2">
          <Text fontSize="sm" pb="10">
            © {new Date().getFullYear()} Sergey Varlamov{" "}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
