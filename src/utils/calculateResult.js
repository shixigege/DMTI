import { characters } from '../data/questions';

export function calculateResult(answers) {
  const totalScores = {
    dominance: 0,
    morality: 0,
    strategy: 0,
    loyalty: 0
  };

  answers.forEach(answer => {
    totalScores.dominance += answer.scores.dominance;
    totalScores.morality += answer.scores.morality;
    totalScores.strategy += answer.scores.strategy;
    totalScores.loyalty += answer.scores.loyalty;
  });

  const questionCount = answers.length;
  const avgScores = {
    dominance: totalScores.dominance / questionCount,
    morality: totalScores.morality / questionCount,
    strategy: totalScores.strategy / questionCount,
    loyalty: totalScores.loyalty / questionCount
  };

  let closestCharacter = null;
  let minDistance = Infinity;

  characters.forEach(character => {
    const distance = Math.sqrt(
      Math.pow(avgScores.dominance - character.scores.dominance, 2) +
      Math.pow(avgScores.morality - character.scores.morality, 2) +
      Math.pow(avgScores.strategy - character.scores.strategy, 2) +
      Math.pow(avgScores.loyalty - character.scores.loyalty, 2)
    );

    if (distance < minDistance) {
      minDistance = distance;
      closestCharacter = character;
    }
  });

  return {
    avgScores,
    closestCharacter,
    allScores: totalScores
  };
}
