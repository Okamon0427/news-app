import ArticleList from '../components/ArticleList';

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles.articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=ca&apiKey=${process.env.API_KEY}`);
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);

  const articles = await res.json();

  return {
    props: { articles }
  }
}
