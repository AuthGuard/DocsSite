import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    content: 'Easy to use, deploy, and integrate with.',
    title: 'Simple',
  },
  {
    content: 'Everything needed for managing.',
    title: 'Powerful',
  },
  {
    content: 'Customize and extend it with your own plugins.',
    title: 'Customizable',
  },
];

function Feature({content, title}) {
  return (
    <div className="col col--4 margin-vert--md">
      <div
        className={clsx(
          styles.blockContainer,
          'padding-horiz--md',
        )}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
