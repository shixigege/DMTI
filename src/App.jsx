import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from './data/questions';
import { calculateResult } from './utils/calculateResult';
import ProgressBar from './components/ProgressBar';
import QuestionCard from './components/QuestionCard';
import ResultPage from './components/ResultPage';
import Loading from './components/Loading';
import WelcomePage from './components/WelcomePage';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const currentQuestion = questions[currentIndex];

  const handleStart = () => {
    setShowWelcome(false);
  };

  const handleSelect = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const calculatedResult = calculateResult(newAnswers);
      setResult(calculatedResult);
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentIndex(0);
      setAnswers([]);
      setShowResult(false);
      setResult(null);
      setShowWelcome(true);
      setIsLoading(false);
    }, 1000);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (showWelcome) {
    return <WelcomePage onStart={handleStart} />;
  }

  return (
    <div className="min-h-screen relative">
      <div className="background-gradient" />
      <div className="max-w-4xl mx-auto px-4 py-8 relative z-10">
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg animate-float overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #2C2C2C 0%, #4A3728 50%, #1a1a1a 100%)',
              boxShadow: '0 6px 20px rgba(44, 44, 44, 0.25)',
            }}
          >
            <div className="absolute inset-1.5 rounded-full border border-ming-gold/20" />
            <span className="text-white text-3xl font-black relative z-10">明</span>
          </motion.div>
          <h1 className="text-4xl font-black text-ming-ink mb-2 tracking-widest">
            DMTI
          </h1>
          <p className="text-ming-sepia/60 text-lg">大明王朝人格测试</p>
        </motion.header>

        {!showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <ProgressBar current={currentIndex + 1} total={questions.length} />
            </div>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {showResult ? (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <ResultPage result={result} onRestart={handleRestart} />
            </motion.div>
          ) : (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <QuestionCard
                question={currentQuestion}
                current={currentIndex + 1}
                total={questions.length}
                onSelect={handleSelect}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
