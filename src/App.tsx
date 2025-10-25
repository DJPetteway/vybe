import { FaCheck } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import './App.css';
import { submitToWaitlist } from './utils/tallyApi';

export default function VybeWaitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [position, setPosition] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);

  const rotatingWords = [
    'YouTube',
    'Crypto',
    'Drake',
    'Stocks',
    'Nike',
    'Polymarket',
    'Matcha',
    'Gaming',
    'Streaming',
    'Memecoins',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) return;

    try {
      await submitToWaitlist(email);
    } catch (error) {
      console.error('Submission error:', error);
    }

    const newPosition = Math.floor(Math.random() * 400) + 200;
    setPosition(newPosition);
    setSubmitted(true);

    setTimeout(() => {
      window.location.href = 'https://x.com/polyvybe';
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 flex flex-col">
      {/* Animated background gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"
          style={{
            opacity: 0.003,
            animation: 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl"
          style={{
            opacity: 0.003,
            animation: 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            animationDelay: '4s',
          }}
        ></div>
      </div>

      {/* Header */}
      <nav className="relative z-10 px-6 py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            vybe
          </h1>
          <a
            href="https://x.com/polyvybe"
            target="_blank"
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
          >
            Follow updates →
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-xl w-full">
          {!submitted ? (
            <div className="fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 mb-8">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-slate-700">
                  Decide what's trending
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900 mb-12">
                You were early to
                <br />
                <span className="relative inline-block min-w-[300px] h-[1.4em] mt-2 mb-8 overflow-visible">
                  <span
                    key={currentWord}
                    className="absolute left-0 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent slide-in"
                  >
                    {rotatingWords[currentWord]}
                 
::contentReference[oaicite:28]{index=28}

