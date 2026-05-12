import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import RadarChart from './HexagonRadar';

const dimensionDetails = [
  { key: 'dominance', label: '支配', desc: '你的领导能力和决策风格', icon: '👑' },
  { key: 'morality', label: '道义', desc: '你的道德底线和价值观', icon: '⚖️' },
  { key: 'strategy', label: '谋略', desc: '你的规划能力和远见', icon: '🧠' },
  { key: 'loyalty', label: '忠诚', desc: '你的团队归属感和责任感', icon: '💎' },
];

const getScoreLevel = (score) => {
  if (score >= 4) return { text: '极高', color: 'text-ming-red' };
  if (score >= 3) return { text: '较高', color: 'text-ming-gold' };
  if (score >= 2) return { text: '中等', color: 'text-ming-blue' };
  if (score >= 1) return { text: '较低', color: 'text-ming-jade' };
  return { text: '极低', color: 'text-ming-sepia/50' };
};

function Toast({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-ming-ink text-ming-cream rounded-sm shadow-lg border border-ming-gold/30 text-sm font-bold tracking-wider"
        >
          已复制到剪贴板，快去分享给朋友吧
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const IMG_EXTS = ['.jpg', '.jpeg', '.png', '.webp'];

function CharacterAvatar({ character }) {
  const [extIdx, setExtIdx] = useState(0);
  const [imgError, setImgError] = useState(false);
  const imgSrc = `/characters/${character.name}${IMG_EXTS[extIdx]}`;

  const handleError = () => {
    if (extIdx < IMG_EXTS.length - 1) {
      setExtIdx(extIdx + 1);
    } else {
      setImgError(true);
    }
  };

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
      className="w-40 h-40 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden"
      style={{
        background: imgError ? `linear-gradient(135deg, ${character.color}, ${character.color}66)` : undefined,
        boxShadow: imgError ? `0 8px 32px ${character.color}33` : undefined,
      }}
    >
      <img
        src={imgSrc}
        alt={character.name}
        className="w-full h-full object-cover"
        onError={handleError}
        style={{ display: imgError ? 'none' : 'block' }}
      />
      {imgError && (
        <>
          <motion.div
            className="absolute inset-3 rounded-full border-2 border-white/20"
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.15, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <span className="text-white text-6xl font-black relative z-10" style={{ fontFamily: '"Noto Serif SC", serif' }}>
            {character.name[0]}
          </span>
        </>
      )}
    </motion.div>
  );
}

export default function ResultPage({ result, onRestart }) {
  const { avgScores, closestCharacter } = result;
  const [showToast, setShowToast] = useState(false);

  const handleShare = () => {
    const shareText = `我的大明人格测试结果：\n\n${closestCharacter.name} - ${closestCharacter.title}\n"${closestCharacter.quote}"\n\n📊 维度得分：\n支配: ${avgScores.dominance.toFixed(1)}\n道义: ${avgScores.morality.toFixed(1)}\n谋略: ${avgScores.strategy.toFixed(1)}\n忠诚: ${avgScores.loyalty.toFixed(1)}\n\n👉 快来测试你的大明人格！`;

    if (navigator.share) {
      navigator.share({
        title: 'DMTI大明人格测试',
        text: shareText,
      });
    } else {
      navigator.clipboard.writeText(shareText).then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2500);
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto px-4 space-y-6"
    >
      {/* Character Result Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="scroll-card rounded-sm p-8 md:p-10 text-center relative overflow-hidden"
      >
        <div className="cloud-pattern inset-0 w-full h-full" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" style={{ background: closestCharacter.color }} />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr opacity-5 rounded-full translate-y-1/2 -translate-x-1/2" style={{ background: closestCharacter.color }} />

        <div className="relative z-10">
          <CharacterAvatar character={closestCharacter} />

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl font-black text-ming-ink mb-3 ink-underline inline-block"
          >
            {closestCharacter.name}
          </motion.h1>

          <div className="my-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="seal-stamp animate-seal"
            >
              {closestCharacter.title}
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-ming-sepia/80 text-lg leading-relaxed max-w-xl mx-auto mt-4"
          >
            {closestCharacter.description}
          </motion.p>

          {/* Character Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 mx-auto max-w-lg relative"
          >
            <span className="absolute left-0 top-0 text-4xl text-ming-gold/30 font-serif">"</span>
            <p className="text-ming-ink/60 italic text-base leading-relaxed px-6 py-2">
              {closestCharacter.quote}
            </p>
            <span className="absolute right-0 bottom-0 text-4xl text-ming-gold/30 font-serif">"</span>
          </motion.blockquote>
        </div>
      </motion.div>

      {/* Career Advice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
        className="scroll-card rounded-sm p-8"
      >
        <h2 className="text-xl font-bold text-ming-ink mb-4 text-center">职场建言</h2>
        <div className="ming-divider mb-4" />
        <p className="text-ming-sepia/80 text-base leading-relaxed max-w-xl mx-auto text-center">
          {closestCharacter.advice}
        </p>
      </motion.div>

      {/* Radar Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="scroll-card rounded-sm p-8"
      >
        <h2 className="text-2xl font-bold text-ming-ink mb-8 text-center">
          你的大明维度分布
        </h2>
        <div className="flex justify-center">
          <RadarChart scores={avgScores} />
        </div>
      </motion.div>

      {/* Dimension Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85 }}
        className="scroll-card rounded-sm p-8"
      >
        <h2 className="text-2xl font-bold text-ming-ink mb-6 text-center">
          维度详情分析
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {dimensionDetails.map((dim, index) => (
            <motion.div
              key={dim.key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.95 + index * 0.1 }}
              className="bg-gradient-to-br from-white/40 to-ming-cream/30 rounded-sm p-5 border border-ming-sepia/10"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{dim.icon}</span>
                <span className="font-bold text-ming-ink">{dim.label}</span>
              </div>
              <p className="text-sm text-ming-sepia/60 mb-3">{dim.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex-1 h-2 bg-ming-sepia/10 rounded-full overflow-hidden mr-3">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: closestCharacter.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${(avgScores[dim.key] / 5) * 100}%` }}
                    transition={{ duration: 1, delay: 1 + index * 0.1 }}
                  />
                </div>
                <span className={`text-sm font-bold ${getScoreLevel(avgScores[dim.key]).color}`}>
                  {avgScores[dim.key].toFixed(1)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="flex flex-col gap-4 pb-8"
      >
        <motion.button
          onClick={handleShare}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-ming-ink text-ming-cream font-bold rounded-sm tracking-widest
                     shadow-md hover:shadow-lg transition-all duration-300 border border-ming-gold/20 hover:border-ming-gold/50"
          style={{ fontFamily: '"Noto Serif SC", serif' }}
        >
          分享测试结果
        </motion.button>

        <motion.button
          onClick={onRestart}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-ming-cream/80 text-ming-ink/70 font-bold rounded-sm tracking-widest
                     border border-ming-sepia/20 hover:bg-ming-cream hover:text-ming-ink hover:shadow-md transition-all duration-300"
          style={{ fontFamily: '"Noto Serif SC", serif' }}
        >
          重新测试
        </motion.button>
      </motion.div>

      <Toast show={showToast} />
    </motion.div>
  );
}
