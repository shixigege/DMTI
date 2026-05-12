import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="background-gradient" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 flex flex-col items-center gap-8"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="relative"
        >
          <motion.div
            className="w-28 h-28 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #2C2C2C 0%, #4A3728 50%, #1a1a1a 100%)',
              boxShadow: '0 0 0 0 rgba(44, 44, 44, 0.3)',
            }}
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(44, 44, 44, 0.3)',
                '0 0 0 24px rgba(44, 44, 44, 0)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="absolute inset-2 rounded-full border border-ming-gold/20" />
            <span
              className="text-white text-5xl font-black relative z-10"
              style={{ fontFamily: '"Noto Serif SC", serif' }}
            >
              明
            </span>
          </motion.div>

          {/* Ink ripple animations */}
          <motion.div
            className="absolute inset-0 rounded-full border border-ming-sepia/15"
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border border-ming-sepia/10"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}
          />
        </motion.div>

        <motion.div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-black text-ming-ink mb-2 tracking-widest"
          >
            DMTI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-ming-sepia/60"
          >
            大明王朝人格测试
          </motion.p>
        </motion.div>

        {/* Ink dot loading */}
        <motion.div className="flex items-center gap-3 mt-4">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-ming-ink/60"
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
