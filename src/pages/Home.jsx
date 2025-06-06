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
import ShowcaseSection from '../sections/ShowcaseSection';

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
        imageSrc="/images/gosia-about-us.jpg"
        imageAlt="SEO Audit"
        title="In-Depth SEO Audits"
        text="<strong>Tailored SEO</strong> services for modern businesses. Let's grow together. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        ctaText="Learn More"
        ctaLink="/services"
        backgroundColor="#fff"
        textColor="#000000"
      />
      <RightImageLeftSection
        imageSrc="/images/gosia-about-us.jpg"
        imageAlt="SEO Audit"
        title="In-Depth SEO Audits"
        text="<strong>Tailored SEO</strong> services for modern businesses. Let's grow together. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
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
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
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
      <RightImageLeftSection
        imageSrc="/images/gosia-about-us.jpg"
        imageAlt="SEO Audit"
        title="In-Depth SEO Audits"
        text="<strong>Tailored SEO</strong> services for modern businesses. Let's grow together. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        ctaText="Learn More"
        ctaLink="/services"
      />
      <CardGrid />
      <ParallaxSection 
        imageSrc="/images/parralax.jpg"
        imageAlt="SEO Audit"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <TextBlock
        title="Elevate Your Online Presence"
        text="<strong>Tailored SEO</strong> services for modern businesses. Let's grow together. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        ctaText="Start Now"
        ctaLink="/contact"
      />
      <ImageLeftText
        imageSrc="/images/gosia-about-us.jpg"
        imageAlt="SEO Audit"
        text="<strong>Tailored SEO</strong> services for modern businesses. Let's grow together. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        backgroundColor="#fff"
        textColor="#000000"
      />
      <ImageRightText 
        imageSrc="/images/gosia-about-us.jpg"
        imageAlt="SEO Audit"
        text="<strong>Tailored SEO</strong> services for modern businesses. Let's grow together. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <ShowcaseSection 
        imageSrc="/images/gosia-back-1.png"
        imageAlt="SEO Audit"
        sectionOneTitle = "Let’s Talk Results"
        sectionOneText = "Discover how our strategies help businesses like yours increase visibility, traffic, and conversions. No fluff—just data-backed SEO results."
        sectionTwoTitle = "Why Work With Me?"
        sectionTwoText = "I bring strategy, technical expertise, and transparency to every SEO project. No guesswork—only performance and clarity. With over a decade of experience, I’ve helped businesses of all sizes rank higher, attract qualified traffic, and convert visitors into loyal customers. I focus on sustainable growth, white-hat techniques, and detailed reporting so you’re always informed about what’s working. Whether you’re a startup looking to build authority or an established brand aiming to scale, I tailor every solution to your unique goals and challenges."
      />
      <ReviewSlider />
    </div>
  );
}

export default Home;
