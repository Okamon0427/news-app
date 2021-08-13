import { Center, Container, Flex, Text } from "@chakra-ui/react"
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
        <Container>
          <Flex align="center" justify="space-between">
            <Link href='/'>Canada</Link>
            <Link href='/about'>About</Link>
          </Flex>
        </Container>
      </Flex>
    </>
  )
}

export default Nav;