import { useState, useEffect } from 'react';

interface QuoteProps {
    text: string;
}

export default function Quote({ text }: QuoteProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText(text.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            } else {
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }, [text, currentIndex]);

    return <p className="text-3xl font-bold mb-4">{displayedText}</p>;
}