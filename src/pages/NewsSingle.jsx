import React from 'react';
import { useParams } from 'react-router-dom';
import newsData from '../data/news.json';
import { Helmet } from 'react-helmet-async';
import PageHero from '../sections/PageHero';

const NewsPage = () => {
  const { slug } = useParams();
  const article = newsData.find((item) => item.slug === slug);

  if (!article) {
    return <div className="container mt-5">Article not found.</div>;
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | News | SEOPETERMAN</title>
        <meta name="description" content={article.summary} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.summary} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://yourdomain.com/news/${article.slug}`} />
        <meta property="og:image" content={`https://yourdomain.com${article.image}`} />
      </Helmet>

      <PageHero
        title={article.title}
        backgroundImage={article.image}
        breadcrumbs={[
          { name: 'Home', link: '/' },
          { name: 'News', link: '/news' },
          { name: article.title }
        ]}
      />

      <div className="container my-5">
        <div className="mb-4 text-muted">{article.date}</div>

        <div className="ratio ratio-4x3 mb-4">
          <img
            src={article.image}
            alt={article.title}
            className="img-fluid rounded object-fit-cover w-100 h-100"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
    </>
  );
};

export default NewsPage;
