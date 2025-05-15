const button = document.querySelector('.add-task');
const inputTask = document.querySelector('.input-task');
const inputTime = document.querySelector('.input-time');
const fullList = document.querySelector('.ul-list');

let checkIn = "assets/check_box_outline_blank_76dp_E8EAED_FILL0_wght400_GRAD0_opsz48.png";
let checkOut = "assets/check_box_76dp_E8EAED_FILL0_wght400_GRAD0_opsz48.png";

let taskList = []

function adicionarTask(){
  if(inputTask.value == ''){
    alert("Você não digitou a tarefa !")
  }else{ 
    if(inputTime.value == '' && taskList == ''){
      alert("Caso queira ser notificado, adicione também o horário da tarefa")
    }else{
      taskList.push({
        tarefa: inputTask.value,
        hora: inputTime.value,
        concluida: false
      })
    }
}

    inputTask.value = '';
    inputTime.value ='';
    mostrarTarefas();
}

function mostrarTarefas(){

    let novaLi = ''

    taskList.forEach((item, index) => {

      novaLi = novaLi + `

      <li class="tarefa ${item.concluida && "done"}">
          <div class="dcheck">
              <img class="img-close" src="assets/close_76dp_E8EAED_FILL0_wght400_GRAD0_opsz48.png" alt="Fechar" onclick="deletItem(${index})">
              <img class="img-check" src="${item.concluida ? checkOut : checkIn}" alt="Caixa de Check" onclick="concluirTask(${index})">
          </div>
            <p class="ltask">${item.tarefa}</p>
            <p class="ltime">${item.hora}</p>
      </li> 

      `
    })
    fullList.innerHTML = novaLi;
                                //Transforma o obj em string
    localStorage.setItem('list',JSON.stringify(taskList))

}

function deletItem(index){
    taskList.splice(index, 1);
    
    mostrarTarefas();
}

function concluirTask(index){
    taskList[index].concluida = !taskList[index].concluida;
    
    mostrarTarefas();
}

function recarregarTask(){
    const taskLocalStorage = localStorage.getItem('list');

    if(taskLocalStorage){
    taskList = JSON.parse(taskLocalStorage);//Transforma em obj de volta
    }

    mostrarTarefas();
}

recarregarTask();

button.addEventListener('click', adicionarTask)

/*
// Textos das notificações
const NOTIFICATION_TITLE = 'Title';
const NOTIFICATION_BODY = 'Notification from the Renderer process. Click to log to console.';
const CLICK_MESSAGE = 'Notification clicked!';

document.getElementById('notify').addEventListener('click', () => {
  // Solicita permissão de notificação, se necessário
  if (Notification.permission === 'granted') {
    showNotification();
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        showNotification();
      }
    });
  }
});

function showNotification() {
  const notification = new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY });
  
  
}*/
