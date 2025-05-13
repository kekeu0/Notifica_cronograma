const button = document.querySelector('.add-task');
const inputTask = document.querySelector('.input-task');
const inputTime = document.querySelector('.input-time');
const fullList = document.querySelector('.ul-list');

let taskList = []

function adicionarTask(){
    taskList.push({
      tarefa: inputTask.value,
      hora: inputTime.value,
      concluida: false
    })
  //taskList.push(inputTime.value)

    inputTask.value = '';
    inputTime.value ='';
    mostrarTarefas();
}

function mostrarTarefas(){

    let novaLi = ''

    taskList.forEach((item, index) => {

      novaLi = novaLi + `

      <li class="tarefa">
          <div class="dcheck">
              <img class="img-close" src="assets/close_76dp_E8EAED_FILL0_wght400_GRAD0_opsz48.png" alt="Fechar" onclick="deletItem(${index})">
              <img class="img-check" src="assets/check_box_outline_blank_76dp_E8EAED_FILL0_wght400_GRAD0_opsz48.png" alt="Caixa de Check">
          </div>
            <p class="ltask">${item.tarefa}</p>
            <p class="ltime">09:00</p>
      </li> 

      `
    })
    fullList.innerHTML = novaLi;
}

function deletItem(index){
    taskList.splice(index, 1)
    
    mostrarTarefas();
}

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
