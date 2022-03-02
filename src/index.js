import "./css/style.css";
import getResponse, { getScore } from "./modules/api.js";

const renderScore = (score) => {
  const scoresList = document.querySelector(".scores-list");
  scoresList.innerHTML = "";
  score.forEach(({ user, score }) => {
    const scoreItem = document.createElement("li");
    scoreItem.classList.add("score-item");
    scoreItem.innerHTML = `<span>${user}</span>: <span>${score}</span>`;
    scoresList.appendChild(scoreItem);
  });
};
