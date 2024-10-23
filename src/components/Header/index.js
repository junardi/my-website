import React from "react";
import clsx from 'clsx';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from '@docusaurus/Link';
import Logo from '@site/static/img/logo.jpg';
import styles from './styles.module.css';

export default function Header() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <img src={Logo} width="200" style={{borderRadius: '10px', marginBottom: '15px'}} alt={`Mark's Logo`} />            
                <p className="hero__subtitle"><em>&ldquo;{siteConfig.tagline}&rdquo;</em></p>
                <div className={styles.buttons}>
                <Link
                    className="button button--secondary button--lg"
                    to="/blog">
                    Checkout my Blog!
                </Link>
                </div>
            </div>
        </header>
    );
}