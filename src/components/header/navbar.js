import { useState } from "react";
import { Box, chakra, useColorModeValue } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

import HamburgerMenu from "../UI/hamburgerMenu";
import ColorModeToggle from "../UI/colorModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const bg = useColorModeValue("gray.200", "gray.300");
  const color = useColorModeValue("black", "white");

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Box
      as="nav"
      display="flex"
      flexDir={{ base: "row-reverse", lg: "row" }}
      alignItems="center"
      fontWeight="500"
    >
      <HamburgerMenu toggled={isOpen} toggle={setIsOpen} />
      <chakra.ul
        bg={{ base: bg, lg: "transparent" }}
        color={{ base: "black", lg: color }}
        display={{
          base: isOpen ? "block" : "none",
          lg: "flex",
        }}
        position={{ base: "absolute", lg: "static" }}
        top="5rem"
        left="5%"
        right="5%"
        rounded={{ base: "lg", lg: "none" }}
        py={{ base: "2", lg: "0" }}
        px={{ base: "4", lg: "0" }}
        alignItems={{ lg: "center" }}
        boxShadow={{ base: "xl", lg: "none" }}
        zIndex="2"
      >
        <chakra.li
          listStyleType="none"
          px={{ lg: "4" }}
          py={{ base: "3", lg: "0" }}
        >
          <ScrollLink
            to="home"
            smooth
            duration={500}
            offset={-100}
            onClick={closeMenu}
          >
            <chakra.div cursor="pointer">Home</chakra.div>
          </ScrollLink>
        </chakra.li>

        <chakra.li
          listStyleType="none"
          px={{ lg: "4" }}
          py={{ base: "3", lg: "0" }}
        >
          <ScrollLink
            to="about"
            smooth
            duration={500}
            offset={-90}
            onClick={closeMenu}
          >
            <chakra.div cursor="pointer">About</chakra.div>
          </ScrollLink>
        </chakra.li>

        <chakra.li
          listStyleType="none"
          px={{ lg: "4" }}
          py={{ base: "3", lg: "0" }}
        >
          <ScrollLink
            to="projects"
            smooth
            duration={500}
            offset={-140}
            onClick={closeMenu}
          >
            <chakra.div cursor="pointer">Projects</chakra.div>
          </ScrollLink>
        </chakra.li>

        <chakra.li
          listStyleType="none"
          px={{ lg: "4" }}
          py={{ base: "3", lg: "0" }}
        >
          <ScrollLink
            to="skills"
            smooth
            duration={500}
            onClick={closeMenu}
          >
            <chakra.div cursor="pointer">Skills</chakra.div>
          </ScrollLink>
        </chakra.li>
      </chakra.ul>
      <ColorModeToggle />
    </Box>
  );
};

export default Navbar;
