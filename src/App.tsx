import { FaCheck } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import './App.css'

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
    'Memecoins'
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
      await fetch('https://api.tally.so/forms/mOWANR/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields: { email } })
      });
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl" style={{ opacity: 0.003, animation: 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl" style={{ opacity: 0.003, animation: 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite', animationDelay: '4s' }}></div>
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
                <span className="text-sm font-medium text-slate-700">Decide what's trending</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900 mb-12">
                You were early to<br/>
                <span className="relative inline-block min-w-[300px] h-[1.4em] mt-2 mb-8 overflow-visible">
                  <span 
                    key={currentWord}
                    className="absolute left-0 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent slide-in"
                  >
                    {rotatingWords[currentWord]}
                  </span>
                </span>
              </h2>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-12">
                Now's your time to prove it
              </p>
              
              <div className="space-y-4">
                <div className="relative group">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 text-lg bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-2xl 
                             focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300
                             group-hover:border-slate-300 placeholder:text-slate-400"
                  />
                </div>
                
                <button 
                  onClick={handleSubmit}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl 
                           font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-[1.02]
                           transition-all duration-300 active:scale-[0.98]"
                >
                  Join waitlist
                </button>
              </div>
              
              <p className="text-center text-sm text-slate-500 mt-6">
                Join <span className="font-semibold text-slate-700">2,000+</span> people who get it
              </p>
            </div>
          ) : (
            <div className="fade-in text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl flex items-center justify-center mb-6 shadow-2xl shadow-green-500/50 mx-auto">
                <FaCheck className="w-10 h-10 text-white" strokeWidth={3} />
              </div>
              
              <h2 className="text-5xl font-bold mb-4 text-slate-900">You're on the list</h2>
              <p className="text-xl text-slate-600 mb-8">
                You're <span className="font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">#{position}</span> in line
              </p>

              <div className="flex items-center justify-center gap-2 text-slate-500">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <p className="text-sm text-slate-500 mt-4">Redirecting to X...</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 border-t border-slate-200/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">
            vybe
          </h3>
          <p className="text-sm text-slate-600 mb-4">
            Powered by <span className="font-semibold text-slate-600">Polymarket</span>
          </p>
          <div className="flex gap-8 justify-center text-sm text-slate-500">
            <a href="https://x.com/polyvybe" target="_blank" className="hover:text-slate-900 transition-colors font-medium">X</a>
            <a href="https://cosmic-gerbil-26d.notion.site/How-Vybe-Works-28a29b11235080afa64cd2b620e47bd6" target="_blank" className="hover:text-slate-900 transition-colors font-medium">Terms</a>
            <a href="https://cosmic-gerbil-26d.notion.site/How-Vybe-Works-28a29b11235080afa64cd2b620e47bd6" target="_blank" className="hover:text-slate-900 transition-colors font-medium">Privacy</a>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
