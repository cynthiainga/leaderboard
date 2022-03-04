import { getScore } from './api.js';

export const renderScore = (scores) => {
  const scoresList = document.querySelector('.list');
  scoresList.innerHTML = '';
  scores.forEach(({ user, score }) => {
    const scoreItem = document.createElement('li');
    scoreItem.classList.add('score-item');
    scoreItem.innerHTML = `<span class="span-player"><i class="fa fa-user fa-2x"></i>${user}</span> <span>${score}</span>`;
    scoresList.appendChild(scoreItem);
  });
};

export const refreshData = async () => {
  const result = await getScore();
  const { result: data } = await result.json();
  data.sort((player1, player2) => player2.score - player1.score);
  renderScore(data);
};
