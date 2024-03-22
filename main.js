/* --------------- IMPORTS: NEEDED TO RUN WINDOWS APPLICATION --------------- */ 
const {app, BrowserWindow} = require('electron');
    // Exp: This is importing from 'electron' which helps indicate my app, and open BrowserWindow.
const url = require('url');
    // Exp: This import 'url' helps open up files.
const path = require('path');
    // Exp: This import 'path' helps open up files.




/* --------------- VARIABLES --------------- */ 
let widthVariable = 800;
let heightVariable = 600;




/* --------------- FUNCTIONS --------------- */ 

/* ----- Function: Create Startup Window ----- */ 
function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Vita',
            // Exp: This is the title that shows up on the app bar.
        width: widthVariable,
            // Exp: This is the width of window.
        height: heightVariable,
            // Exp: This is height of window.
    });
        // Exp: 'mainWindow' is a new instance of the imported "BrowserWindow".

    
    mainWindow.webContents.openDevTools();    
        // Exp: This opens up DevTools within my Electron app.


    const startupUrl = url.format({
        pathname: path.join(__dirname, './vita_cra/build/index.html'),
        protocol: 'file',
    })
        // Exp: 'startupUrl' is a way to launch a file as the startup file.

    
    mainWindow.loadURL(startupUrl);
        // Exp: Action = Load URL indicated.
}


/* ----- Function: Launch using Electron's whenReady feature ----- */ 
app.whenReady().then(createMainWindow);