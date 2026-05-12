import { motion } from 'framer-motion';

const optionStyles = [
  {
    icon: 'bg-ming-ink',
    border: 'border-ming-sepia/20 hover:border-ming-blue/60',
    glow: 'hover:shadow-[0_8px_24px_rgba(58,90,140,0.12)]'
  },
  {
    icon: 'bg-ming-darkwood',
    border: 'border-ming-sepia/20 hover:border-ming-blue/60',
    glow: 'hover:shadow-[0_8px_24px_rgba(58,90,140,0.12)]'
  },
  {
    icon: 'bg-ming-blue',
    border: 'border-ming-sepia/20 hover:border-ming-blue/60',
    glow: 'hover:shadow-[0_8px_24px_rgba(58,90,140,0.12)]'
  },
  {
    icon: 'bg-ming-red',
    border: 'border-ming-sepia/20 hover:border-ming-blue/60',
    glow: 'hover:shadow-[0_8px_24px_rgba(58,90,140,0.12)]'
  }
];

export default function QuestionCard({ question, current, total, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="scroll-card rounded-sm p-8 md:p-10 max-w-3xl mx-auto relative overflow-hidden"
    >
      {/* Cloud pattern decoration */}
      <div className="cloud-pattern inset-0 w-full h-full" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-ming-ink flex items-center justify-center shadow-md">
              <span className="text-ming-cream font-bold text-sm">{current}</span>
            </div>
            <span className="text-ming-sepia/50 text-sm">/ {total}</span>
          </div>
          <span className="text-ming-sepia/30 text-sm font-bold tracking-[0.3em]">DMTI</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-ming-ink mb-10 leading-relaxed"
        >
          {question.question}
        </motion.h2>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <motion.button
              key={option.label}
              onClick={() => onSelect(option)}
              className={`group relative w-full text-left p-5 md:p-6 rounded-sm border-2
                bg-[#FFFEF9] ${optionStyles[index].border}
                transition-all duration-300 hover:scale-[1.01]
                ${optionStyles[index].glow} overflow-hidden`}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-ming-cream/0 via-ming-cream/50 to-ming-cream/0 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

              <div className="relative z-10 flex items-start gap-4">
                <span className={`w-10 h-10 rounded-sm ${optionStyles[index].icon} flex items-center justify-center font-bold text-ming-cream shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {option.label}
                </span>
                <span className="text-ming-ink/80 pt-1.5 text-base leading-relaxed">{option.text}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
