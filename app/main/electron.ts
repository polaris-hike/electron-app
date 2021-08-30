const path = require('path');
const { app, BrowserWindow, ipcMain}  = require('electron');

const ROOT_PATH = path.join(app.getAppPath(), '../');

// 👇 监听渲染进程发的消息并回复
ipcMain.on('get-root-path', (event, arg) => {
  event.reply('reply-root-path', ROOT_PATH);
});

function isDev() {
  return process.env.NODE_ENV === 'development';
}

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (isDev()) {
    mainWindow.loadURL(`http://127.0.0.1:7001`);
  } else {
    mainWindow.loadFile(`file://${path.join(__dirname,'../dist/index.html')}`)
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate',function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
})