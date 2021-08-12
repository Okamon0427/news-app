import { Container } from "@chakra-ui/react"
import Nav from './Nav';
import Meta from './Meta';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <Container my="6" maxW="container.lg" centerContent>
        {children}
      </Container>
    </>
  )
}

export default Layout;