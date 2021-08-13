import ArticleList from '../../../components/ArticleList';

const category = ({ articles }) => {
  return (
    <div>
      <ArticleList articles={articles.articles} />
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?category=${context.params.category}&apiKey=${process.env.API_KEY}`);

  const articles = await res.json();
  
  return {
    props: { articles }
  }
}

export default category;