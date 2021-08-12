import { Box, Container, Flex } from "@chakra-ui/react"
import Link from 'next/link';

const Nav = () => {
  return (
    <Box>
      <Flex p={4} bg="tomato">
        <Container>
          <Flex
            align="center"
            justify="space-between"
          >
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
          </Flex>
        </Container>
      </Flex>
    </Box>
  )
}

export default Nav;