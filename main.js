import { startClock } from "./funks.js";
const mainContainer = document.getElementById('main-container')
const existingSave = await getExistingSave()
let activeTime = existingSave.activeTime
function getExistingSave() {
  return new Promise(resolve => {
      const existingSave = JSON.parse(localStorage.getItem('dayPlan-save'));
      resolve(existingSave || {
        activeTime: 'am',
          am: ['', '', '', '', '', '', '', '', '', '', '', ''],
          pm: ['', '', '', '', '', '', '', '', '', '', '', '']
      });
  });
}

startClock
function makeDiv(a, b, c){
 return `<div class="time-row">
  <label for="${c}">${a}</label>
  <input type="text" id="${c}" class="text-input" value=${b}>
  <button id=${c} class="delete-button">-</button>
 </div>`
}
function startPage(){
   for (let i = 0; i <= 11; i++) {
if(i === 0){
mainContainer.innerHTML += makeDiv(12, existingSave[activeTime][i], 0);
} else {
mainContainer.innerHTML += makeDiv(i, existingSave[activeTime][i], i);
}
   }
   const textInputs = document.querySelectorAll('.text-input');
   textInputs.forEach(textInput => {
   textInput.addEventListener('keydown', function (event){
    if(event.key === 'Enter'){
    existingSave[activeTime][event.target.id] = event.target.value;
    localStorage.setItem('dayPlan-save', JSON.stringify(existingSave))
    console.log(event.target.id)
    textInput.style.animation = `drawAny 1s ease-in-out`
mainContainer.innerHTML = ''

    startPage()
   const textInputs = document.querySelectorAll('.text-input');
   textInputs.forEach(textInput => {
    if(textInput.id === event.target.id)
    textInput.style.animation = `drawAny 1s ease-in-out`
   })
   }
   })
  })
const topButtons = document.querySelectorAll('.top-buttons');
topButtons.forEach(button => {
  if(button.id === activeTime) {
    button.style.backgroundColor = 'rgba(228, 34, 34, 0.452)'
  } else {
    button.style.backgroundColor = 'rgba(228, 34, 34, 0.0)'
  }
  button.addEventListener('click', function (event) {
    existingSave.activeTime = event.target.id
    activeTime = event.target.id
    localStorage.setItem('dayPlan-save', JSON.stringify(existingSave))
mainContainer.innerHTML = ''
startPage()
checkColor()

drawAll()

const topButtons = document.querySelectorAll('.top-buttons');
topButtons.forEach(button => {
  if(button.id === event.target.id){
    button.style.backgroundColor = 'rgba(228, 34, 34, 0.452)'
  } else {
    button.style.backgroundColor = 'rgba(228, 34, 34, 0.0)'
  }
})
console.log(event.target.id)
    
  })
})
const deleteButtons = document.querySelectorAll('.delete-button');
deleteButtons.forEach(button => {
  button.addEventListener('click', function (event){
    
    existingSave[activeTime][event.target.id] = '';
    localStorage.setItem('dayPlan-save', JSON.stringify(existingSave))
console.log(event.target.id)
mainContainer.innerHTML = ''

startPage()
let textInputs = document.querySelectorAll('.text-input');
textInputs.forEach(textInput => {
 if (textInput.id === event.target.id) {
   textInput.style.animation = `drawAny 1s ease-in`
 } 
})
  })
})
}
startPage()
console.log(activeTime)
function drawAll(){
  let timeRows = document.querySelectorAll('.time-row');
  timeRows.forEach(row => {
    row.style.animation = `drawAny 1s ease-in-out`
  })
}
drawAll()
 // localStorage.removeItem('dayPlan-save')
 function checkColor(){
const root = document.documentElement;

  if (activeTime === 'pm' ){
root.style.setProperty('--main-color', 'var(--pm-main-color)');
root.style.setProperty('--header-color', 'var(--pm-header-color)');
 } else {
root.style.setProperty('--main-color', 'var(--am-main-color)');
root.style.setProperty('--header-color', 'var(--am-header-color)');
 }
}
checkColor()