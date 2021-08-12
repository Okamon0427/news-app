import { Container } from "@chakra-ui/react"
import Header from './Header';
import Nav from './Nav';
import Meta from './Meta';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <Nav />
      <Container maxW="container.lg">
        {children}
      </Container>
    </>
  )
}

export default Layout;