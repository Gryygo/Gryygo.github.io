// To do list:
//   Talvez: mudar a caixa de alert 
//   Ajustar a responsividade 
//   Adicionar funcionalidade de exclusão de tarefas

let startMinutes = 0;
let startMinutesRest = 0
let time;
let rest = false
let focus = false
let restTime;
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let text = document.getElementById("message").innerHTML;
let button1 = document.getElementById("focusBtn1")
let button2 = document.getElementById("focusBtn2")
let button3 = document.getElementById("focusBtn3")
let button4 = document.getElementById("restBtn1")
let button5 = document.getElementById("restBtn2")
let button6 = document.getElementById("restBtn3")
let buttons = document.getElementsByTagName("button")
const countdown = document.getElementById("timer");

// Funções para definir o tempo e estado para cada botão
const time25 = () => {if (!focus && !rest) {startMinutes = 25; time = startMinutes * 60; console.log(time);}}
const activate25 = () => { button1.dataset.active = "on"; button2.dataset.active = "off"; button3.dataset.active = "off"}

const time30 = () => {if (!focus && !rest) {startMinutes = 30; time = startMinutes * 60; console.log(time);}}
const activate30 = () => { button1.dataset.active = "off"; button2.dataset.active = "on"; button3.dataset.active = "off"}

const time35 = () => {if (!focus && !rest) {startMinutes = 35; time = startMinutes * 60; console.log(time);}}
const activate35 = () => { button1.dataset.active = "off"; button2.dataset.active = "off"; button3.dataset.active = "on"}

const time05 = () => {if (!focus && !rest) {startMinutesRest = 5; restTime = startMinutesRest * 60; console.log(restTime);}}
const activate05 = () => { button4.dataset.active = "on"; button5.dataset.active = "off"; button6.dataset.active = "off"}

const time10 = () => {if (!focus && !rest) {startMinutesRest = 10; restTime = startMinutesRest * 60; console.log(restTime);}}
const activate10 = () => { button4.dataset.active = "off"; button5.dataset.active = "on"; button6.dataset.active = "off"}

const time15 = () => {if (!focus && !rest) {startMinutesRest = 15; restTime = startMinutesRest * 60; console.log(restTime);}}
const activate15 = () => { button4.dataset.active = "off"; button5.dataset.active = "off"; button6.dataset.active = "on"}
// -------------------------------------------------------------------------------------------------------------------------


// Função associada ao botão principal responsável por iniciar todas as funções
function startFunctions() {
  if (rest || focus) {
    flowControl()
  } else {
    cronometer()
  }
}

// Função responsável por não permitir a sobreposição de tasks
function flowControl () {
  Swal.fire({
  title: "Don't overdo yoursef!",
  text: 'One task at once!',
  icon: 'warning',
  confirmButtonText: 'Ok',
  customClass: "alertBox",
  iconColor: "#ff6347",
  confirmButtonColor: '#ff6347'
  })
}

// Função responsável pela contagem e adição de tasks
function cronometer() {
  if (startMinutes == 0 || startMinutesRest == 0 || insideValue == "") {
    Swal.fire({
      title: "Forgeting something?",
      text: 'Fill all the fields',
      icon: 'question',
      confirmButtonText: 'Ok',
      customClass: "alertBox",
      iconColor: "#ff6347",
      confirmButtonColor: '#ff6347'
    })
  } 
  else {
    focus = true
    Add()
    Transfer()
    myInterval = setInterval(setTime, 1000)
    console.log(startMinutes, startMinutesRest)
  }
}

// Função de contagem e alteração do layout
function setTime() {
  // Parcela da função responsável pela contagem dos tempos de denscanso e foco
    countdown.style.fontSize = "6vw"
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds
    countdown.innerHTML = `${minutes}:${seconds}`;
    time--
    if (time < 0 && focus) {
      Swal.fire({
        title: "Task finished!",
        text: 'Time to rest now',
        icon: 'success',
        confirmButtonText: 'Ok',
        customClass: "alertBox",
        iconColor: "#ff6347",
        confirmButtonColor: '#ff6347'
      })
      time = restTime
      focus = false
      rest = true
    }
    else if (time < 0 && rest) {
      document.getElementById("label" + JSON.stringify(i)).style.textDecoration = "line-through"
      document.getElementById("input" + JSON.stringify(i)).checked = true
      document.getElementById("message").innerHTML = "Start again?";
      if (i == 1) {countdown.innerHTML = `${i} task finished`}
      else {countdown.innerHTML = `${i} tasks finisheds`}
      countdown.style.fontSize = "4.8vw"
      focus = false
      rest = false
      startMinutes = 0
      startMinutesRest = 0
      clearInterval(myInterval)
    }

// Parcela da função responsável pela alteração do layout em função do estado ativo no momento
    if (focus) {
      img1.setAttribute("src", "/imgs/book_vector.png");
      img1.setAttribute("alt", "book");
      img2.setAttribute("src", "/imgs/headphone_vector.png");
      img2.setAttribute("alt", "headphone");
      img3.setAttribute("src", "/imgs/pen_vector.png");
      img3.setAttribute("alt", "pen");
      document.getElementById("message").innerHTML = "Time to focus";
    }
    if (rest) {
      img1.setAttribute("src", "/imgs/game_vector.png");
      img1.setAttribute("alt", "game");
      img2.setAttribute("src", "/imgs/coffee_vector.png");
      img2.setAttribute("alt", "coffee");
      img3.setAttribute("src", "/imgs/video_vector.png");
      img3.setAttribute("alt", "video");
      document.getElementById("message").innerHTML = "Time to relax";
    }
}


// Define um listener para monitorar as mudanças no input de texto
let insideValue = "";
document
  .getElementsByName("task-input")[0]
  .addEventListener("change", listenerHandle);

function listenerHandle() {
  insideValue = this.value;
}


// Limpa o input de texto e reseta o estado dos botões
function Transfer() {
  if (insideValue) {
    document.getElementsByName("task-input")[0].value = "";
    insideValue = "";
    button1.dataset.active = "off"
    button2.dataset.active = "off"
    button3.dataset.active = "off"
    button4.dataset.active = "off"
    button5.dataset.active = "off"
    button6.dataset.active = "off"
  }
}


// Adiciona as tarefas do input à barra lateral com os devidos elementos e atributos
let i = 0 // Variável utilizada para a criação de diferentes id's através da sua iteração
function Add() {
  let label = document.createElement("label");
  let input = document.createElement("input");
  let span = document.createElement("span");
  i++
  
  label.setAttribute("class", "container");
  label.setAttribute('id', "label" + JSON.stringify(i));
  input.setAttribute("type", "checkbox");
  input.setAttribute("disabled", "disabled");
  input.setAttribute('id', "input" + JSON.stringify(i));
  span.setAttribute("class", "checkmark");
  
  if (insideValue == "" || startMinutes == 0 || startMinutesRest == 0) {null}
  else {
    label.innerHTML = insideValue;
    label.appendChild(input);
    label.appendChild(span);
    
    let taskContainer = document.getElementById("tasks");
    taskContainer.append(label);
    console.log(label)
  }
}