import { Box, Image, Flex } from "@chakra-ui/react"

const parseDate = (d) => {
  const parsedDate = new Date(d);
  const year = parsedDate.getFullYear();
  let month = parsedDate.getMonth() + 1;
  let date = parsedDate.getDate();
  let hour = parsedDate.getHours();
  let minute = parsedDate.getMinutes();
  
  if (date < 10) {
    date = '0' + date;
  }
  if (month < 10) {
    month = '0' + month;
  }
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }

  return year + '-' + month + '-' + date + ' ' + hour + ':' + minute;
}

const ArticleItem = ({ article }) => {
  const newDate = parseDate(article.publishedAt);

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <a href={article.url} target="_blank" rel="noreferrer">
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
              {article.source.name} / {newDate}
            </Flex>
          </Box>
        </Box>
      </a>
    </Box>
  )
}

export default ArticleItem;