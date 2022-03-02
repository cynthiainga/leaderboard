import './css/style.css';
import getResponse, { getScore } from './modules/api.js';

const renderScore = (scores) => {
  const scoresList = document.querySelector('.list');
  scoresList.innerHTML = '';
  scores.forEach(({ user, score }) => {
    const scoreItem = document.createElement('li');
    scoreItem.classList.add('score-item');
    scoreItem.innerHTML = `<span>${user}</span>: <span>${score}</span>`;
    scoresList.appendChild(scoreItem);
  });
};

const form = document.querySelector('#score-form');
const inputs = form.querySelectorAll('input');
const refreshBtn = document.querySelector('.refresh-btn');

refreshBtn.addEventListener('click', async () => {
  const result = await getScore();
  const { result: data } = await result.json();
  renderScore(data);
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const newPlayer = {
    user: inputs[0].value,
    score: inputs[1].value,
  };
  getResponse(newPlayer);
});

window.onload = async () => {
  const result = await getScore();
  const { result: data } = await result.json();
  renderScore(data);
};
