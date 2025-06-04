import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../sections/PageHero';
import ServiceGrid from '../sections/ServiceGrid';
import { FaSearch } from 'react-icons/fa';
import ServicesExtended from '../sections/ServicesExtended';
import LongTextBlock from '../sections/LongTextBlock';

function Services() {
  return (
    <div className="mt-10">
      <Helmet>
        <title>Our SEO Services | SEOPETERMAN</title>
        <meta
          name="description"
          content="Explore SEO services offered by SEOPeterman: from audits to on-page and off-page optimization. Tailored strategies for growth."
        />
        <meta property="og:title" content="Our SEO Services | SEOPeterman" />
        <meta property="og:description" content="Explore how SEOPeterman helps businesses grow with modern, tailored SEO solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.seopeterman.com/services" />
        <link rel="canonical" href="https://www.seopeterman.com/services" />
      </Helmet>

      <PageHero
        title="Our Services"
        backgroundImage="/images/services-hero.jpg"
        breadcrumbs={[
          { name: 'Home', link: '/' },
          { name: 'Services' },
        ]}
      />

      <ServicesExtended />
    </div>
  );
}

export default Services;
