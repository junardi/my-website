import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About',
    Svg: require('@site/static/img/about.svg').default,
    description: (
      <>
        Mark Boribor is an information technology professional who graduated from West Visayas State Univesity Janiuay Campus last 2012.
        He is a competent; analytical; flexible; and eager to perform individual.
      </>
    ),
  },
  {
    title: 'Location',
    Svg: require('@site/static/img/location.svg').default,
    description: (
      <>
        Mark Lives in Don T. Lutero West Janiuay, Iloilo City Philippines. He loves to work at home so that he can hang out with his friends and family frequently.
      </>
    ),
  },
  {
    title: 'Skills',
    Svg: require('@site/static/img/skills.svg').default,
    description: (
      <>
        Javascript, Jquery, Ajax, Angular, React, HTML, CSS, Bootstrap, PHP, Codeigniter, OOP, MySQL, Firebase, Photoshop
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
