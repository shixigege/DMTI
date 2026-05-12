import { motion } from 'framer-motion';

export default function RadarChart({ scores }) {
  const dimensions = [
    { key: 'dominance', label: '支配', angle: 0 },
    { key: 'morality', label: '道义', angle: 90 },
    { key: 'strategy', label: '谋略', angle: 180 },
    { key: 'loyalty', label: '忠诚', angle: 270 },
  ];

  const centerX = 150;
  const centerY = 150;
  const maxRadius = 100;

  const getPoint = (angle, value) => {
    const radian = (angle * Math.PI) / 180;
    const radius = (value / 5) * maxRadius;
    return {
      x: centerX + radius * Math.cos(radian),
      y: centerY - radius * Math.sin(radian)
    };
  };

  const radarPoints = dimensions.map(dim => getPoint(dim.angle, scores[dim.key] || 0));

  const axisLines = dimensions.map(dim => {
    const point = getPoint(dim.angle, 5);
    return (
      <line
        key={dim.key + '-axis'}
        x1={centerX}
        y1={centerY}
        x2={point.x}
        y2={point.y}
        stroke="rgba(139, 115, 85, 0.12)"
        strokeWidth="1"
      />
    );
  });

  const labels = dimensions.map(dim => {
    const labelPoint = getPoint(dim.angle, 5.6);
    return (
      <text
        key={dim.key + '-label'}
        x={labelPoint.x}
        y={labelPoint.y}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#4A3728"
        className="text-sm font-bold"
      >
        {dim.label}
      </text>
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <svg width="300" height="300" viewBox="0 0 300 300">
        <defs>
          <linearGradient id="mingRadarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3A5A8C" stopOpacity="0.5" />
            <stop offset="33%" stopColor="#C8963E" stopOpacity="0.35" />
            <stop offset="66%" stopColor="#C23E3E" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7BA07E" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Grid rings - diamond shapes (4-point polygons) */}
        {[1, 2, 3, 4, 5].map(radius => (
          <polygon
            key={`ring-${radius}`}
            points={dimensions.map(dim => {
              const point = getPoint(dim.angle, radius);
              return `${point.x},${point.y}`;
            }).join(' ')}
            fill="none"
            stroke="rgba(139, 115, 85, 0.1)"
            strokeWidth="1"
          />
        ))}

        {axisLines}

        {/* Score polygon */}
        <motion.polygon
          points={radarPoints.map(p => `${p.x},${p.y}`).join(' ')}
          fill="url(#mingRadarGradient)"
          stroke="#3A5A8C"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Data points */}
        {radarPoints.map((point, i) => (
          <motion.circle
            key={`point-${i}`}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#C23E3E"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          />
        ))}

        {labels}
      </svg>

      {/* Legend */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        {Object.entries(scores).map(([key, value]) => (
          <div key={key} className="text-center px-4 py-2 bg-ming-cream/50 rounded-sm border border-ming-sepia/10">
            <div className="text-ming-sepia/50 text-xs">
              {key === 'dominance' ? '支配' : key === 'morality' ? '道义' : key === 'strategy' ? '谋略' : '忠诚'}
            </div>
            <div className="text-xl font-black text-ming-blue">
              {value.toFixed(1)}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
