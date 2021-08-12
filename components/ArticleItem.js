import { Box } from "@chakra-ui/react"
import Link from 'next/link';

const ArticleItem = ({ article }) => {
  return (
    <Box p="4" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Link href='/article/[id]' as={`/article/${article.id}`}>
        <a>
          <Box
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {article.title}
          </Box>
          <Box>
            {article.body}
          </Box>
        </a>
      </Link>
    </Box>
  )
}

export default ArticleItem;