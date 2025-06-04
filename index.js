// Inicia a janela e diz seu tamanho
const { app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        width: 1310,
        height: 820,
        autoHideMenuBar: true
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`)

});



