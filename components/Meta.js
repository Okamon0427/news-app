import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name="author" content="Takuto Okamoto" />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Latest News App" />
      <meta property="og:description" content="The latest articles, including technology, business, health, and sports topics, can be seen in the app." />
      <meta property="og:url" content="https://latest-news-app.vercel.app/search" />
      <meta property="og:site_name" content="Latest News App" />
      <meta property="og:locale" content="en_CA" />
      <link rel='icon' href='/favicon-32x32.png' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Latest News App',
  keywords: 'news, latest news, breaking news, articles, technology, business, health, sports',
  description: 'The latest articles, including technology, business, health, and sports topics, can be seen in the app'
}

export default Meta;