import { Grid } from "@chakra-ui/react"
import ArticleItem from './ArticleItem';

const ArticleList = ({ articles }) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </Grid>
  )
}

export default ArticleList;