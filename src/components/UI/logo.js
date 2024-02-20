import { chakra, Box } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";

const Logo = () => {
  return (
    <ScrollLink to="home" smooth duration={500} offset={-100}>
      <chakra.div cursor="pointer" mt="2">
        <Image
          src="/favicon/logo.png"
          width={60}
          height={60}
          alt="logo"
          priority
        />
      </chakra.div>
    </ScrollLink>
  );
};

export default Logo;
