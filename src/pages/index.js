import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Divider,
  Button,
  Icon,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import SocialAccounts from "@/components/socialAccounts";

import { seo, about, projects, skills } from "config";

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400");

  const isOdd = (num) => num % 2;

  const title = "Home";
  const description = seo.description;

  const avatarImageStyle = {
    width: "300px",
    height: "300px",
    overflow: "hidden",
    borderRadius: "50%",
  };

  const projectImageStyle = {
    position: "relative",
    width: "400px",
    height: "400px",
    backgroundColor: "transparent",
  };

  const projectImageInnerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "350px",
    height: "350px",
    overflow: "hidden",
    transition: "transform 0.5s ease-in-out",
  };

  const handleHover = (e) => {
    const innerImage = e.currentTarget.querySelector(".inner-image");
    innerImage.style.transform = "translate(-50%, -50%) scale(1.1)";
  };

  const handleLeave = (e) => {
    const innerImage = e.currentTarget.querySelector(".inner-image");
    innerImage.style.transform = "translate(-50%, -50%)";
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={seo.canonical}
        openGraph={{
          title,
          description,
        }}
      />

      {/* Section Home */}
      <Box
        as="section"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
        alignItems="center"
        py="8"
        id="home"
      >
        <Box style={avatarImageStyle} boxShadow="dark-lg" bg="white">
          <Image
            src="/avatar.jpg"
            width={429}
            height={429}
            alt="avatar"
            priority
          />
        </Box>
        <Box>
          <Text pb="2" pt="6">
            Hello World!{" "}
            <span role="img" aria-label="hand">
              👋🏻
            </span>{" "}
            I'm
          </Text>{" "}
          <Heading fontSize={["3xl", "4xl"]} fontWeight="700">
            <Text as="span" color={color}>
              SERGEY VARLAMOV
            </Text>{" "}
          </Heading>
          <Text py="2">{about.introduction}</Text>
        </Box>
        <SocialAccounts />
      </Box>

      {/* Section About */}
      <Heading id="about" fontSize={["3xl", "4xl"]} fontWeight="700" mb={1}>
        <Text as="span">About Me</Text>{" "}
      </Heading>
      <Divider />
      <Box textAlign={{ base: "center", lg: "left" }} my={6}>
        {about.description}
      </Box>

      {/* Section Projects */}
      <Heading id="about" fontSize={["3xl", "4xl"]} fontWeight="700" mb={1}>
        <Text as="span">Projects</Text>{" "}
      </Heading>
      <Divider />
      <Box
        as="section"
        py="4"
        textAlign={{ base: "center", lg: "left" }}
        id="projects"
      >
        {projects.map((project, index) => (
          <Box
            key={index}
            display={{ lg: "flex" }}
            justifyContent={{ lg: "space-around" }}
            alignItems={{ lg: "center" }}
            flexDirection={{ lg: isOdd(index) === 1 ? "row-reverse" : "row" }}
          >
            <Box
              style={projectImageStyle}
              maxW={{ base: "90%", lg: "unset" }}
              mx={{ base: "auto", lg: "0" }}
              pl={{ lg: isOdd(index) === 1 && "10" }}
              pr={{ lg: isOdd(index) === 0 && "10" }}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              <Box
                style={projectImageInnerStyle}
                className="inner-image"
                boxShadow="dark-lg"
                rounded="xl"
                bg="white"
              >
                <Image
                  src={project.image}
                  width={400}
                  height={400}
                  alt={project.title}
                  priority
                />
              </Box>
            </Box>

            <Box width={{ lg: "60%" }} px="10">
              <Heading fontSize={["2xl"]} fontWeight="700">
                {project.title}
              </Heading>
              <Text py="4">{project.description}</Text>

              <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
                pb="8"
              >
                {project.technologies &&
                  project.technologies.map((technology, index) => (
                    <Box key={index} m={{ base: "3px", lg: "5px" }}>
                      <Button
                        size="xs"
                        // height="30px"
                        // width="140px"
                        border="1px"
                        variant="outline"
                        // color="teal"
                        leftIcon={<Icon as={technology.icon} />}
                      >
                        {technology.title}
                      </Button>
                    </Box>
                  ))}
              </Box>

              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
                pb={4}
              >
                <ChakraLink href={project.liveDemoLink} isExternal>
                  <Button
                    size="sm"
                    height="40px"
                    width="110px"
                    border="2px"
                    color={color}
                  >
                    Live Demo
                  </Button>
                </ChakraLink>
                <ChakraLink href={project.gitHubLink} isExternal>
                  <Button
                    size="sm"
                    height="40px"
                    width="110px"
                    border="2px"
                    color={color}
                  >
                    GitHub
                  </Button>
                </ChakraLink>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Section Skills */}
      <Heading id="skills" fontSize={["3xl", "4xl"]} fontWeight="700" mb={1}>
        <Text as="span">Skills</Text>{" "}
      </Heading>
      <Divider />
      <Box display="flex" flexWrap="wrap" justifyContent="center" my={6}>
        {skills &&
          skills.map((skill, index) => (
            <Box key={index} m={{ base: "3px", lg: "7px" }}>
              <img
                src={skill.link}
                alt={skill.title}
                style={{ width: "auto", height: "25px" }}
              />
            </Box>
          ))}
      </Box>
    </>
  );
};

export default Home;
