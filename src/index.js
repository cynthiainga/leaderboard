import './css/style.css';
import getResponse from './modules/api.js';
import { refreshData } from './modules/refreshData.js';

const form = document.querySelector('#score-form');
const inputName = form.querySelector('.input-name');
const inputScore = form.querySelector('.input-score');
const refreshBtn = document.querySelector('.refresh-btn');

refreshBtn.addEventListener('click', refreshData);

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const newPlayer = {
    user: inputName.value,
    score: inputScore.value,
  };
  await getResponse(newPlayer);
  form.reset();
  refreshData();
});

window.onload = async () => {
  refreshData();
  const refreshIcon = document.querySelector('.fa-refresh');
  refreshIcon.classList.add('fa-spin');
};
