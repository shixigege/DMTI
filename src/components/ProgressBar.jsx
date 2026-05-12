import { motion } from 'framer-motion';

export default function ProgressBar({ current, total }) {
  const progress = (current / total) * 100;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="56"
            cy="56"
            r="45"
            stroke="rgba(139, 115, 85, 0.12)"
            strokeWidth="8"
            fill="none"
          />
          <motion.circle
            cx="56"
            cy="56"
            r="45"
            stroke="url(#mingProgressGradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          <defs>
            <linearGradient id="mingProgressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3A5A8C" />
              <stop offset="50%" stopColor="#C8963E" />
              <stop offset="100%" stopColor="#C23E3E" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            key={current}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-3xl font-black text-ming-ink"
          >
            {current}
          </motion.span>
          <span className="text-xs text-ming-sepia/40 mt-1">/ {total}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <motion.div
          className="w-2 h-2 rounded-full bg-ming-gold"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-sm text-ming-sepia/50">答题中...</span>
      </div>
    </div>
  );
}
