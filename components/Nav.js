import { Center, Container, Flex, Text } from "@chakra-ui/react";
import Link from 'next/link';
import { useRouter } from "next/router";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  const router = useRouter();

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
            <span className={router.asPath === "/" ? styles.active : ""}>
              <Link href='/'>Canada</Link>
            </span>
            <span className={router.asPath === "/category/technology" ? styles.active : ""}>
              <Link href='/category/technology'>Technology</Link>
            </span>
            <span className={router.asPath === "/category/business" ? styles.active : ""}>
              <Link href='/category/business'>Business</Link>
            </span>
            <span className={router.asPath === "/category/health" ? styles.active : ""}>
              <Link href='/category/health'>Health</Link>
            </span>
            <span className={router.asPath === "/category/sports" ? styles.active : ""}>
              <Link href='/category/sports'>Sports</Link>
            </span>
            <span className={router.asPath === "/about" ? styles.active : ""}>
              <Link href='/about'>About</Link>
            </span>
          </Flex>
        </Container>
      </Flex>
    </>
  )
}

export default Nav;