const NOTIFICATION_TITLE = 'Title';
const NOTIFICATION_BODY = 'Notification from the Renderer process. Click to log to console.';
const CLICK_MESSAGE = 'Notification clicked!';

document.getElementById('notify').addEventListener('click', () => {
  // Solicita permissão de notificação se necessário
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
  
  
}
