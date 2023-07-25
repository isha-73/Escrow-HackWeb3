import { Box, Container, Stack, Text, Button, Flex } from "@chakra-ui/react";
import { useConnect } from "../components/ConnectProvider";
import { useEffect } from "react";
import Router from "next/router";

export default function Main() {
  const { connectWallet, loading, walletAddress } = useConnect();

  useEffect(() => {
    if (walletAddress) {
      Router.push("/dashboard");
    }
  }, [walletAddress]);

  return (
    <Box background={"black"} minH={"100vh"}>
      <Container maxW="container.md" centerContent>
        <Flex justifyContent={"center"} alignItems={"center"} minH={"100vh"}>
        <Stack spacing={8} textAlign="center">
          <Text
            bgGradient='linear(to-l, red.300, blue.700)'
            bgClip='text'
            fontSize='7xl'
            fontWeight='bold'
          >
            Secure Escrow
          </Text>
          <Text fontSize="xl" color={"gray.100"}>
            Secure Escrow is a decentralized escrow service that allows users to
            safely trade with each other without the need for a middleman.
          </Text>
          <Button
                size={"lg"}
                bgGradient='linear(to-r, red.500, blue.500)'
                _hover={{
                    bgGradient: 'linear(to-r, red.700, blue.700)',
                }}
                isLoading={loading}
                loadingText='Connecting'
                spinnerPlacement='start'
                color={"white"}
                maxWidth={40}
                alignSelf={"center"}
                onClick={connectWallet}
            >
                Connect Wallet
            </Button>
        </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
