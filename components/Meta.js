import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon-32x32.png' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Latest News App',
  keywords: 'news, latest news, breaking news',
  description: 'Get the latest news'
}

export default Meta;