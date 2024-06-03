import { Box, Button, Icon, Link as ChakraLink } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialAccounts = [
  { icon: FaGithub, path: "https://github.com/bold-italic", title: "Github" },
  { icon: FaLinkedin, path: "https://www.linkedin.com/in/v-sergey/", title: "Linkedin" },
];

const SocialAccounts = () => {
  return (
    <Box py="2">
      {socialAccounts.map((item, index) => (
        <ChakraLink
          href={item.path}
          aria-label={item.title}
          key={index}
          isExternal
        >
          <Button aria-label={item.title} variant="unstyled">
            <Icon as={item.icon} boxSize={7} />
          </Button>
        </ChakraLink>
      ))}
    </Box>
  );
};

export default SocialAccounts;
