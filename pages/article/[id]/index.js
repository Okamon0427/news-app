import { Box } from "@chakra-ui/react"

const article = ({ article }) => {
  return (
    <Box p="4" maxW="xl" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
      >
        {article.title}
      </Box>
      <Box>
        {article.body}
      </Box>
    </Box>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
  const article = await res.json();

  return {
    props: { article }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();

  const ids = articles.map(article => article.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false
  }
}

export default article;