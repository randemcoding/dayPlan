import { startClock } from "./funks.js";
const mainContainer = document.getElementById('main-container')
startClock

//numOne is starting number numTwo is length
function buildTimesContainer(numOne, numTwo) {
for (let j = numOne; j < numTwo; j++) {
const timesContainer = document.getElementById('times-container')
  let div = document.createElement('div')
if (j < 0){
  div.innerText = 'AM' 
  div.style.color = 'white';
  div.setAttribute('class', 'times')
  timesContainer.appendChild(div)
} else if (j > 0) {
  div.innerText = j + ':00' 
  div.setAttribute('class', 'times')
  timesContainer.appendChild(div)
} else {
  div.innerText = '12:00' 
  div.setAttribute('class', 'times')

  timesContainer.appendChild(div)
}
}
}
const timesContainer = document.getElementById('times-container')
let div = document.createElement('div')
div.innerText = `PM`
div.style.color = 'white';
div.setAttribute('class', 'times')

for (let c = 0; c < 24; c++){
  const inputsContainer = document.getElementById('inputs-container')
  let input = document.createElement('input')
  input.setAttribute('type', 'text')
  input.setAttribute('id', `text-${c}`)
  let placeholderText =  localStorage.getItem(`text-${c}`) || 'Free Time';
 if(localStorage.getItem(`text-${c}`)){
  input.setAttribute('value', placeholderText)
  input.setAttribute('class', `text-inputs`)
  input.setAttribute('color', 'white')
  input.setAttribute('placeholder', 'Free Time')
  inputsContainer.appendChild(input)
} else {
  input.setAttribute('placeholder', placeholderText)
  input.setAttribute('class', `text-inputs`)
  inputsContainer.appendChild(input)
}
if (c % 2 ==0){
  input.style.backgroundColor = 'rgba(200,100,180,0.1)'
}
}
//'1,13'pm
//'0,12'am
buildTimesContainer(-1,12)
buildTimesContainer(0,12)
timesContainer.appendChild(div)
for (let i = 0; i < 25; i++){
  const countdownContainer = document.getElementById('countdown-container')
  let deleteButton = document.createElement('button')
  if (i > 0){
  deleteButton.setAttribute('class', `delete-buttons`)
  deleteButton.setAttribute('id', i)
  deleteButton.innerText = 'Clear'
  countdownContainer.appendChild(deleteButton)
  }else {
  deleteButton.setAttribute('id', `reset-button`)
    deleteButton.innerText = 'Reset';
    deleteButton.style.color = 'white';
  countdownContainer.appendChild(deleteButton)
  }
}
//localStorage.clear()
//localStorage.setItem('text-1', 'Go Jogging')
let textInputs = document.querySelectorAll('.text-inputs');

textInputs.forEach(textInput => {
  textInput.addEventListener('keydown', function textListener(event) {
    if (event.key === 'Enter') {
      const inputId = event.target.id;
      const inputValue = event.target.value;
      localStorage.setItem(inputId, inputValue);
      event.target.blur();
      event.target.style.animation = 'drawAny 2s ease-in';
    }
  });
});
textInputs.forEach(textInput => {
  textInput.addEventListener('input', function textListener(event) {
      const inputId = event.target.id;
      const inputValue = event.target.value;
      localStorage.setItem(inputId, inputValue);
  });
});



const countdownContainer = document.getElementById('countdown-container');
countdownContainer.innerHTML += 'randem'
const deleteButtons = document.querySelectorAll('.delete-buttons');
deleteButtons.forEach(button => {
 
 button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default right-click context menu

    // Clear the value of the input element
    localStorage.removeItem(`text-${this.id - 1}`);
    let textInput = document.getElementById(`text-${this.id - 1}`)
    textInput.style.animation = 'vanishAny 2s ease-out';
    setTimeout(() => {
      textInput.value = '';
      textInput.placeholderText = 'Free Time'
    }, 2000);
  });
})
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', function() {
localStorage.clear();
textInputs.forEach(textInput => {
  textInput.style.animation = 'vanishAny 2s ease-out';
  setTimeout(() => {
    textInput.value = '';
    textInput.placeholderText = 'Free Time'
  }, 2000);
})
})