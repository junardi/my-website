import React from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import Logo from '@site/static/img/logo.jpg';

// import styles from './index.module.css';

import Header from '../components/Header';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <img src={Logo} width="200" style={{borderRadius: '10px', marginBottom: '15px'}} alt={`Mark's Logo`} />            
//         <p className="hero__subtitle"><em>&ldquo;{siteConfig.tagline}&rdquo;</em></p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/blog">
//             Checkout my Blog!
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Hello Im mark and welcome to my Blog.">
      {/* <HomepageHeader /> */}
      <Header />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
