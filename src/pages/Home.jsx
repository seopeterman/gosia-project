import React from 'react';
import Hero from '../sections/Hero';
import { Helmet } from 'react-helmet-async'; 
import ImageLeftText from '../sections/ImageLeftText';
import ImageRightText from '../sections/ImageRightText';
import ParallaxSection from '../sections/ParallaxSection';
import LeftImageRigthSection from '../sections/LeftImageRigthSection';
import RightImageLeftSection from '../sections/RightImageLeftSection';
import TextBlock from '../sections/TextBlock';
import LongTextBlock from '../sections/LongTextBlock';
import ServiceGrid from '../sections/ServiceGrid';
import CardGrid from '../sections/CardGrid';
import LeftTextBlock from '../sections/LeftTextBlock';
import BoxedTextBlock from '../sections/BoxedTextBlock';
import ReviewSlider from '../sections/ReviewSlider';


function Home() {
  return (
    <div className="mt-10">
      <Helmet>
        <title>Home | SEOPETERMAN</title>
        <meta name="description" content="Welcome to SEOPeterman - Tailored SEO solutions to elevate your online presence and grow your business." />
        <meta property="og:title" content="Home | SEOPeterman" />
        <meta property="og:description" content="Welcome to SEOPeterman - Tailored SEO solutions to elevate your online presence and grow your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.seopeterman.com/" />
        <link rel="canonical" href="https://www.seopeterman.com/" />
      </Helmet>
      <Hero/>
      <LeftImageRigthSection
        imageSrc="/images/gosia-about-us.jpeg"
        imageAlt="SEO Audit"
        title="In-Depth SEO Audits"
        text="<strong>Tailored SEO</strong> services for modern businesses. Let's grow together. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        ctaText="Learn More"
        ctaLink="/services"
        backgroundColor="#fff"
        textColor="#000000"
      />
      <RightImageLeftSection
        imageSrc="/images/gosia-about-us.jpeg"
        imageAlt="SEO Audit"
        title="In-Depth SEO Audits"
        text="<strong>Tailored SEO</strong> services for modern businesses. Let's grow together. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        ctaText="Learn More"
        ctaLink="/services"
      />
      <LongTextBlock
        title="Elevate Your Online Presence"
        text="<strong>Tailored SEO</strong> services for modern businesses. Let's grow together. <strong>Tailored SEO</strong> services for modern businesses. Let's grow together. <strong>Tailored SEO</strong> services for modern businesses. Let's grow together. <strong>Tailored SEO</strong> services for modern businesses. Let's grow together. <strong>Tailored SEO</strong> services for modern businesses. Let's grow together. <strong>Tailored SEO</strong> services for modern businesses. Let's grow together. <strong>Tailored SEO</strong> services for modern businesses. Let's grow together. <strong>Tailored SEO</strong> services for modern businesses. Let's grow together. <strong>Tailored SEO</strong> services for modern businesses. Let's grow together."
        ctaText="Start Now"
        ctaLink="/contact"
        backgroundColor="#fff"
        textColor="#000000"
      />
      <LeftTextBlock
        subtitle="Quick Note"
        title="Fancy Left-Aligned Block"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <BoxedTextBlock
        subtitle="Hello"
        title="Blue Box on White"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />

      <BoxedTextBlock
        subtitle="Reversed"
        title="White Box on Blue"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        reverse
      />
      <ServiceGrid />
      <CardGrid />
      <ParallaxSection 
        imageSrc="/images/parralax.jpg"
        imageAlt="SEO Audit"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <TextBlock
        title="Elevate Your Online Presence"
        text="<strong>Tailored SEO</strong> services for modern businesses. Let's grow together. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        ctaText="Start Now"
        ctaLink="/contact"
      />
      <ImageLeftText
        imageSrc="/images/gosia-about-us.jpeg"
        imageAlt="SEO Audit"
        text="<strong>Tailored SEO</strong> services for modern businesses. Let's grow together. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        backgroundColor="#fff"
        textColor="#000000"
      />
      <ImageRightText 
        imageSrc="/images/gosia-about-us.jpeg"
        imageAlt="SEO Audit"
        text="<strong>Tailored SEO</strong> services for modern businesses. Let's grow together. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <ReviewSlider />
    </div>
  );
}

export default Home;
