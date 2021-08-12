import { Box, Container } from "@chakra-ui/react"

const Header = () => {
  return (
    <Container maxW="container.lg" centerContent>
      <Box padding="4" bg="gray.100" maxW="3xl">
        LATEST NEWS
      </Box>
    </Container>
  )
}

export default Header;