import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  Icon,
  Image,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import logo from "../Images/logo.png";
import { useNavigate } from "react-router-dom";
const avatars = [
  {
    name: "Utkarsh Singhal",
    url: "https://avatars.githubusercontent.com/u/106021674?v=4",
  },
];

export default function Signup() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [phoney, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const handleClick = async (e) => {
    let phone=+phoney
    let obj = {
      name,
      username,
      email,
      phone,
      password,
    };
 console.log("obj",obj)
    try {
      let res = await axios.post(
        `https://healthy-vestments-calf.cyclic.app/registerData`,
        obj
      );
      toast({
        title: "Signup Successfull",

        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setIsAuth(true);
    } catch (err) {
      console.log("err");
    }
  };
  if (isAuth) {
    return navigate("/login");
  }
  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Login Page
          </Heading>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <Image src={logo} width={"200px"} />
          </Stack>
        </Stack>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Hello User We are waiting for You
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Hello User Please type your crenditial
            </Text>
          </Stack>
          <Box as={"form"} mt={2}>
            <Stack spacing={4}>
              <Input
                placeholder="Name"
                value={name}
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                onChange={(e) => setName(e.target.value)}
              />

              <Input
                placeholder="UserName"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                onChange={(e) => setUserName(e.target.value)}
              />

              <Input
                placeholder="Email"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                placeholder="Phone Number"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                onChange={(e) => setPhone(e.target.value)}
              />

              <Input
                placeholder="Password"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Stack>
            <Button
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, red.400,pink.400)",
                boxShadow: "xl",
              }}
              onClick={handleClick}
            >
              Signin
            </Button>
          </Box>
          form
        </Stack>
      </Container>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
    </Box>
  );
}

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};
