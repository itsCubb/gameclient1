const { app, BrowserWindow, ipcMain, Menu, session } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1540,
    height: 860,
    minWidth: 1540,
    minHeight: 860,
    resizable: false,  // Disable resizing from corners or edges
    maximizable: false,  // Prevent maximizing on double-click
    frame: false,  // Remove the default frame
    backgroundColor: '#0a0a0a',
    icon: path.join(__dirname, 'src/assets/Synergy Studios Logo.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
    },
  });

  // Automatically open the DevTools when the window is created
  win.webContents.openDevTools();

  // Clear cache when the window finishes loading
  win.webContents.on('did-finish-load', () => {
    session.defaultSession.clearCache().then(() => {
      console.log('Cache cleared successfully!');
    }).catch((err) => {
      console.error('Failed to clear cache:', err);
    });
  });

  // Prevent entering fullscreen mode
  win.on('enter-full-screen', () => {
    win.setFullScreen(false); // Prevent the window from entering full-screen mode
  });

  ipcMain.on('minimize-window', () => {
    win.minimize();
  });

  ipcMain.on('close-window', () => {
    win.close();
  });

  Menu.setApplicationMenu(null);

  // Load your app's URL
  win.loadURL('http://localhost:3000').then(() => {
    console.log('App loaded successfully!');
  }).catch((err) => {
    console.error('Failed to load app:', err);
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});