const button = document.querySelector('.add-task');
const inputTask = document.querySelector('.input-task');
const inputTime = document.querySelector('.input-time');
const fullList = document.querySelector('.ul-list');

let checkIn = "assets/check_box_outline_blank_76dp_E8EAED_FILL0_wght400_GRAD0_opsz48.png";
let checkOut = "assets/check_box_76dp_E8EAED_FILL0_wght400_GRAD0_opsz48.png";

let taskList = []

function adicionarTask(){
  if(inputTask.value == ''){
    prompt("Você não digitou a tarefa !") // alert()"BUGA OS INPUT"
  }else{
      taskList.push({
        tarefa: inputTask.value,
        hora: inputTime.value,
        concluida: false,
        notificado: false
      })

    inputTask.value = '';
    inputTime.value ='';
    mostrarTarefas();

  }
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


// Notificações
//gpt
if(Notification.permission !== 'granted') {
  Notification.requestPermission();
}

// Verificação de minuto

setInterval(() => {
  const time = new Date();
  const horaAtual = `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`;

  taskList.forEach((item, index) => {
    if (item.hora === horaAtual && !item.notificado) {
      notificar(index);
    }
  })
}, 60000); // = 1 minuto

/* const NOTIFICATION_TITLE = 'Notificando sua Tarefa'
const NOTIFICATION_BODY = 'tarefa' */
// const CLICK_MESSAGE = 'Notificado!' Futura implementação

function notificar(index){
  if (!notificacoesAtivas) return;

    if(Notification.permission === 'granted') {
      new Notification('Notificando sua Tarefa', {
        body: taskList[index].tarefa
      });
      taskList[index].notificado = true;
      localStorage.setItem('list', JSON.stringify(taskList));
    }
}


//Refazer ou modificar com código próprio

// Variável global
//gpt

let notificacoesAtivas = true;

const toggleNotificacao = document.getElementById('toggle-notificacao');

// Recuperar estado salvo
const notificacoesSalvas = localStorage.getItem('notificacoesAtivas');
if (notificacoesSalvas !== null) {
  notificacoesAtivas = notificacoesSalvas === 'true';
}

// Atualiza imagem conforme o estado
function atualizarIconeNotificacao() {
  toggleNotificacao.src = notificacoesAtivas ? 'assets/notifications_active_76dp_E8EAED_FILL0_wght400_GRAD0_opsz48.png' : 'assets/notifications_76dp_E8EAED_FILL0_wght400_GRAD0_opsz48.png';
  toggleNotificacao.alt = notificacoesAtivas ? 'Notificações Ativadas' : 'Notificações Desativadas';
}

atualizarIconeNotificacao();

// Ao clicar no ícone
toggleNotificacao.addEventListener('click', () => {
  notificacoesAtivas = !notificacoesAtivas;
  localStorage.setItem('notificacoesAtivas', notificacoesAtivas);
  atualizarIconeNotificacao();
});

//Fazer botão de configurações
