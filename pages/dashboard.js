import {
  Box,
  Container,
  Divider,
  Text,
  Flex,
  Heading,
  Link,
} from "@chakra-ui/react";
import { useConnect } from "../components/ConnectProvider";
import Router from "next/router";
import { useEffect } from "react";

export default function Dashboard() {
  const { walletAddress } = useConnect();

  useEffect(() => {
    if (!walletAddress) {
      Router.push("/");
    }
  }, [walletAddress]);

  return (
    <Box background={"black"} minH={"100vh"}>
      <Container maxW="container.lg">
        <Flex
          width={"100%"}
          py={4}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={"row"}
        >
          <Heading color={"white"}>Secure Escrow</Heading>
          <Flex alignItems={"end"} flexDirection={"column"}>
            <Link color={"gray.400"}>Welcome</Link>
            <Text color={"gray.200"}>{walletAddress}</Text>
          </Flex>
        </Flex>
        <Divider mb={8} />
        <Text fontSize={"3xl"} color={"white"}>
          Dashboard
        </Text>
      </Container>
    </Box>
  );
}
