import { Box, Image, Flex } from "@chakra-ui/react"
import Link from 'next/link';

const ArticleItem = ({ article }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <a href={article.url} target="_blank">
        <Image src={article.urlToImage} />
        <Box p="4">
          <Box
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {article.title}
          </Box>
          <Box my="2">
            {article.description}
          </Box>
          <Box as="span" color="gray.600" fontSize="sm">
            <Flex>
              {article.source.name} / {article.publishedAt}
            </Flex>
          </Box>
        </Box>
      </a>
    </Box>
  )
}

export default ArticleItem;