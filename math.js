// 1. Инициализация
let level_number = 0;
const savedLevelStr = localStorage.getItem('currentLevel');
if (savedLevelStr) {
  const n = Number(savedLevelStr);
  if (!Number.isNaN(n) && n >= 1 && n <= 22) {
    level_number = n;
  }
}
console.log('Уровень при загрузке:', level_number);

// 2. Функции для кнопок
function setLevelAndRedirect(n) {
  level_number = n;
  localStorage.setItem('currentLevel', String(n));
  window.location.replace('mathgame.html');
}

window.exit = () => window.location.replace('index.html');

for (let i = 1; i <= 22; i++) {
  window[`level_${i}`] = () => setLevelAndRedirect(i);
}
