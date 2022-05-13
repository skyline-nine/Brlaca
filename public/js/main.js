let stone = 0;
let stonesell = 1;
var localStorage = window.localStorage;
// Loading and Saving options
function Save(){
  localStorage.setItem('stone', stone);
}

function Load(){
  let stone = Number(localStorage.getItem('stone'))
  document.getElementById('countstone').innerText = 'Stone: ' + stone;
}
Load();
document.getElementById('clickstone').onclick = () => {
  stone = stone + 1;
  document.getElementById('countstone').innerText = 'Stone: ' + stone;
  Save();
};



document.getElementById('sell').onclick = () => {
  stone = stone - 1;

}