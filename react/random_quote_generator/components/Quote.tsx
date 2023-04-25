import { useState, useEffect } from 'react';

interface QuoteProps {
    text: string;
}

export default function Quote({ text }: QuoteProps) {
    return <p className="text-3xl font-bold mb-4">{text}</p>;
}