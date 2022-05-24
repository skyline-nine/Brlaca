let stone = 0;
let money = 0;
let stonesell = 1;
var localStorage = window.localStorage;
// Loading and Saving options
function Save(){
  localStorage.setItem('stone', stone);
  localStorage.setItem('money', money);
}
console.log(stone)
function Load(){
  stone = Number(localStorage.getItem('stone'))
  money = Number(localStorage.getItem('money'))
  document.getElementById('countstone').innerText = 'Stone: ' + stone;
  document.getElementById('countmoney').innerText = 'Money: ' + money;
}
Load();
document.getElementById('sell').onclick = () => {
  money = stonesell * stone;
  stone = stone - stone;
  alert(money)
  Save();
};

document.getElementById('clickstone').onclick = () => {
  stone = stone + 1;
  document.getElementById('countstone').innerText = 'Stone: ' + stone;
  Save();
};



