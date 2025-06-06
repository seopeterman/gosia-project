import React from 'react';
import PageHero from '../sections/PageHero';
import LeftImageRigthSection from '../sections/LeftImageRigthSection';
import LongTextBlock from '../sections/LongTextBlock';
import { Helmet } from 'react-helmet-async';
import LeftTextBlock from '../sections/LeftTextBlock';
import ShowcaseSection from '../sections/ShowcaseSection';
import Storyline from '../sections/Storyline';

function About() {
  return (
    <div className="mt-10 overflow-hidden">
      <Helmet>
        <title>About me | SEOPETERMAN</title>
        <meta
          name="description"
          content="Learn more about Gosia – your SEO partner focused on results and strategic visibility. Based in the UK, serving businesses worldwide."
        />
        <meta property="og:title" content="About me | SEOPeterman" />
        <meta property="og:description" content="Meet Gosia – your trusted SEO expert helping brands grow through organic visibility." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.seopeterman.com/about" />
        {/* Optional: favicon or image preview */}
        <link rel="canonical" href="https://www.seopeterman.com/about" />
      </Helmet>

      <PageHero
        title="About Me"
        backgroundImage="/images/about-hero.jpg"
        breadcrumbs={[
          { name: 'Home', link: '/' },
          { name: 'About Me' }
        ]}
      />
      
      <ShowcaseSection 
        imageSrc="/images/gosia-back-1.png"
        imageAlt="SEO Audit"
        sectionOneTitle = "Let’s Talk Results"
        sectionOneText = "Discover how our strategies help businesses like yours increase visibility, traffic, and conversions. No fluff—just data-backed SEO results."
        sectionTwoTitle = "Why Work With Me?"
        sectionTwoText = "I bring strategy, technical expertise, and transparency to every SEO project. No guesswork—only performance and clarity. With over a decade of experience, I’ve helped businesses of all sizes rank higher, attract qualified traffic, and convert visitors into loyal customers. I focus on sustainable growth, white-hat techniques, and detailed reporting so you’re always informed about what’s working. Whether you’re a startup looking to build authority or an established brand aiming to scale, I tailor every solution to your unique goals and challenges."
      />
      <Storyline />
      <LeftTextBlock
        subtitle="Quick Note"
        title="Fancy Left-Aligned Block"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />
      <LeftImageRigthSection
        imageSrc="/images/gosia-about-us.jpg"
        imageAlt="About Gosia"
        title="Meet Gosia"
        text="<strong>I’m Gosia</strong>, an SEO specialist based in the UK. With years of experience, I help businesses improve their visibility and grow sustainably online."
        ctaText="Discover My Services"
        ctaLink="/services"
        backgroundColor="#ffffff"
        textColor="#000000"
      />

      <LeftTextBlock
        subtitle="Quick Note"
        title="Fancy Left-Aligned Block"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />

      <LongTextBlock
        title="Our Mission"
        text="We aim to empower businesses of all sizes with customized SEO strategies that deliver measurable results. Through collaboration and data-driven techniques, we help brands grow in a digital-first world."
        ctaText="Let’s Work Together"
        ctaLink="/contact"
        backgroundColor="#f8f9fa"
        textColor="#000000"
      />
      <LeftTextBlock
        subtitle="Quick Note"
        title="Fancy Left-Aligned Block"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
    </div>
  );
}

export default About;
