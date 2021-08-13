import { useState } from 'react';
import { Container, Button, FormControl, FormLabel, Input } from "@chakra-ui/react"
import ArticleList from '../components/ArticleList';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [articles, setArticles] = useState([]);
  const [message, setMessage] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    // http://localhost:3000/api/search
    const res = await fetch('https://latest-news-app.vercel.app/api/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ keyword })
    });

    const articles = await res.json();

    if (articles.message) {
      setMessage(articles.message);
      setArticles([]);
    } else {
      setMessage(null);
      setArticles(articles);
    }
  }

  return (
    <Container maxW="container.md">
      <form onSubmit={handleSearch}>
        <FormControl id="keyword" isRequired>
          <FormLabel>Enter keyword to search news</FormLabel>
          <Input
            type="text"
            placeholder="bitcoin"
            onChange={e => setKeyword(e.currentTarget.value)}
          />
        </FormControl>
        <Button my="2" type="submit">
          Submit
        </Button>
      </form>
      {message}
      {articles.length > 0 && <ArticleList articles={articles} />}
    </Container>
  )
}

export default Search;