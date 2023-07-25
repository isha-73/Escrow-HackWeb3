import {
  Box,
  Container,
  Button,
  Text,
  Flex,
  Heading,
  Link,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl, FormLabel, Input,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useConnect } from "../components/ConnectProvider";
import Router from "next/router";
import { useEffect, useRef } from "react";
import { ethers } from "ethers";

export default function Dashboard() {
  const { walletAddress, contract, error } = useConnect();

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef(null)
  const amount = useRef(null)

  async function creatEscrow () {
    console.log('Creating escrow...', initialRef.current.value);
    if (ethereum && walletAddress && contract) {
      const createTxn = await contract.createItem(initialRef.current.value, { value: ethers.parseEther('0.1') });
      console.log('Create transaction started...', createTxn.hash);
      onClose();
      await createTxn.wait();
      console.log('Created Item!', createTxn.hash);
    }
  }

  useEffect(() => {
    if (!walletAddress) {
      Router.push("/");
    }
  }, [walletAddress]);

  return (
    <Box background={"black"} minH={"100vh"}>
      <Container maxW="container.xl" py={6}>
        <Flex
          width={"100%"} background={"gray.900"} px={8}
          py={6} rounded={"full"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={"row"}
        >
          <Heading color={"white"}>Secure Escrow</Heading>
          <Flex alignItems={"end"} flexDirection={"column"}>
            <Link color={"gray.400"}>Welcome</Link>
            <Text color={"gray.200"}>{walletAddress}</Text>
          {/* <Text color={"gray.200"}>{contract}</Text> */}
          {/* <Text color={"gray.200"}>{error}</Text> */}
          </Flex>
        </Flex>

        <Flex px={8} my={6} justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize={"3xl"} fontWeight={"bold"} color={"white"}>
          My Escrows</Text>
          <Button onClick={onOpen}>New Escrow</Button>
          <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new escrow</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl pb={6}>
              <FormLabel>Purpose</FormLabel>
              <Input ref={initialRef} placeholder='Enter purpose for this escrow.' />
            </FormControl>
            <FormControl>
              <FormLabel>Amount</FormLabel>
              <Input ref={amount} placeholder='Pay Matic for this purpose' />
              <Text fontSize={"sm"} color={"gray.400"}>If purpose not fulfilled, amount will be reverted back in 7 days.
        </Text>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={creatEscrow}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </Flex>
        
      </Container>
    </Box>
  );
}
