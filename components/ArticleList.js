import { Grid } from "@chakra-ui/react"
import ArticleItem from './ArticleItem';

const ArticleList = ({ articles }) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      {articles.map((article, i) => (
        <ArticleItem key={i} article={article} />
      ))}
    </Grid>
  )
}

export default ArticleList;