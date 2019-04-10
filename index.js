//Importing electron dependencies
const { app, BrowserWindow } = require("electron");

//This is a declaration of the createWindow function, which will be called when electron is ready
const createWindow = () => {
  // Create the browser window.
  let win = new BrowserWindow({ width: 800, height: 600 });

  // and load the index.html of the app.
  win.loadURL(`file:///${__dirname}\\build\\index.html`);
}

//When electron library has loaded a window will be created
app.on('ready', createWindow);