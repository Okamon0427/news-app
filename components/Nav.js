import { Center, Container, Flex, Text } from "@chakra-ui/react";
import Link from 'next/link';

const Nav = () => {
  return (
    <>
      <Flex pt={2} bg="tomato" color="white">
        <Container>
          <Center>
            <Text fontSize="3xl">
              Latest News App
            </Text>
          </Center> 
        </Container>
      </Flex>
      <Flex pb={2} px={4} bg="tomato" color="white">
        <Container maxW="container.md">
          <Flex fontSize={["0.7rem", "1rem"]} align="center" justify="space-between">
            <Link href='/'>Canada</Link>
            <Link href='/category/technology'>Technology</Link>
            <Link href='/category/business'>Business</Link>
            <Link href='/category/health'>Health</Link>
            <Link href='/category/sports'>Sports</Link>
            <Link href='/about'>About</Link>
          </Flex>
        </Container>
      </Flex>
    </>
  )
}

export default Nav;