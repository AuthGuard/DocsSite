import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

const Button = ({children, href}) => {
  return (
    <div className="col col--2 margin-horiz--sm">
      <Link
        className="button button--outline button--primary button--lg"
        to={href}>
        {children}
      </Link>
    </div>
  );
};

const contents = [
  {
    content:
      'Metro aims for sub-second reload cycles, fast startup and quick bundling speeds.',
    image: '/metro/img/content/high-speed-train.png',
    title: 'Fast',
  },
  {
    content: 'Works with thousands of modules in a single application.',
    image: '/metro/img/content/scales.png',
    title: 'Scalable',
  },
  {
    content: 'Supports every React Native project out of the box.',
    image: '/metro/img/content/atom.png',
    title: 'Integrated',
  },
];

const HomeSplash = () => {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <div className={clsx('hero hero-dark', styles.heroBanner)}>
      <div className="container">
        <img
          className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
          src={'img/authguard_logo.png'}
          alt="AuthGuard"
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div
          className={clsx(styles.heroButtons, 'name', 'margin-vert--md')}>
          <Button href={useBaseUrl('docs/intro')}>Get Started</Button>
          <Button href={useBaseUrl('api')}>Check the API</Button>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomeSplash />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
