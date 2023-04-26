import Layout from '../components/Layout';
import Quote from '../components/Quote';
import Author from '../components/Author';
import Signature from '../components/Signature';
import ShareButton from '../components/ShareButton';
import { QuoteType } from '../types/types';
import { useState, useEffect } from 'react';
import styles from '../styles/index.module.css';
import fs from 'fs';
import path from 'path';

export default function Home() {
  const [quote, setQuote] = useState<QuoteType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [background, setBackground] = useState(0);
  const backgrounds = [
    "/images/beach.jpg",
    "/images/city.jpg",
    "/images/fall.jpg",
    "/images/flower.jpg",
    "/images/mist.jpg",
    "/images/mountain.jpg",
    "/images/reef.jpg",
    "/images/sail.jpg",
    "/images/sky.jpg",
    "/images/sunset.jpg",
    "/images/surf.jpg",
    "/images/tiger.jpg",
    ]
    const [quoteKey, setQuoteKey] = useState(0);

  async function fetchQuote() {
    setIsLoading(true);
    const data = await fetch('https://api.quotable.io/random');
    const quote = await data.json();
    setQuote(quote);
    setIsLoading(false);

    // change background
    setBackground((background + 1) % backgrounds.length);

    setQuoteKey(quoteKey + 1);
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <Layout bgImage={backgrounds[background]}>
        <ShareButton quote={quote?.content} author={quote?.author}/>
        <div className={styles['quote-container']}>
          {quote && (
            <div className={styles['quote-box']}>
              <Quote key={quoteKey} text={quote.content} />
              <div className={styles['author-box']} style={{textAlign: "left"}}>
                <Author name={quote.author} />
              </div>
            </div>
          )}
          <div className={styles['btn-container']}>
            <button
              className={styles['btn-new-quote']}
              onClick={fetchQuote}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Get New Quote'}
            </button>
          </div>
        </div>
        <Signature />
    </Layout>
  );
}
