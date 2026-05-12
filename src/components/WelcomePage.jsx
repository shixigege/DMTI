import { motion } from 'framer-motion';

export default function WelcomePage({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <div className="background-gradient" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl mx-auto"
      >
        {/* Ink wash decorative circle */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          className="w-36 h-36 mx-auto mb-8 relative"
        >
          <div
            className="w-full h-full rounded-full flex items-center justify-center shadow-lg relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #2C2C2C 0%, #4A3728 50%, #1a1a1a 100%)',
              boxShadow: '0 8px 32px rgba(44, 44, 44, 0.25), inset 0 2px 0 rgba(255,255,255,0.1)',
            }}
          >
            {/* Gold rim */}
            <div className="absolute inset-1.5 rounded-full border border-ming-gold/30" />
            <span className="text-white text-6xl font-black relative z-10" style={{ fontFamily: '"Noto Serif SC", serif' }}>
              明
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-6xl font-black text-ming-ink mb-2 tracking-widest"
        >
          DMTI
        </motion.h1>

        <div className="ming-divider" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl text-ming-sepia font-semibold mb-6"
        >
          测测你最像大明王朝哪个人物
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-ming-sepia/70 text-lg leading-relaxed mb-12 max-w-lg mx-auto"
        >
          <p className="mb-4">
            在朝堂之上，你是运筹帷幄的阁老，还是刚正不阿的言官？
          </p>
          <p>
            三十道情景抉择，照见你的大明人格，寻得与你契合的剧中人物。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.button
            onClick={onStart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-14 py-4 bg-ming-ink text-ming-cream text-lg font-bold rounded-sm tracking-widest
                       shadow-lg hover:shadow-xl transition-all duration-300
                       border border-ming-gold/30 hover:border-ming-gold/60"
            style={{ fontFamily: '"Noto Serif SC", serif' }}
          >
            开始测试
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-sm text-ming-sepia/50"
          >
            约五分钟 · 三十道题目
          </motion.p>
        </motion.div>

        {/* Four dimensions preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 grid grid-cols-4 gap-6 max-w-md mx-auto"
        >
          {[
            { icon: '👑', label: '支配' },
            { icon: '⚖️', label: '道义' },
            { icon: '🧠', label: '谋略' },
            { icon: '💎', label: '忠诚' },
          ].map((dim, index) => (
            <motion.div
              key={dim.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="text-2xl mb-2">{dim.icon}</span>
              <span className="text-sm text-ming-sepia/60">{dim.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 text-center text-xs text-ming-sepia/40"
      >
        <p>大明王朝 · 人格测试</p>
      </motion.div>
    </div>
  );
}
