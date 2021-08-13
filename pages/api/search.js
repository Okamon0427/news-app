const searchNews = async (req, res) => {
  const keyword = req.body.keyword;

  const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${keyword}&apiKey=${process.env.API_KEY}`);
  
  const data = await response.json();

  if (data.articles.length > 0) {
    return res.status(200).json(data.articles);
  } else {
    return res.status(404).json({ message: `Article with keyword "${keyword}" is not found` });
  }
}

export default searchNews;