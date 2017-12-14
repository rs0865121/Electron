const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu
const ipc = electron.ipcRenderer

app.on('ready', _=>{
    console.log("Working")
    mainWindow = new BrowserWindow({ width:600, height:700})
    mainWindow.loadURL(`file://${__dirname}/index.html`)

    const menu = Menu.buildFromTemplate(myTemplate)
    Menu.setApplicationMenu(menu)

    mainWindow.on('closed', _=>{
        mainWindow = null
        console.log('Closed')
    })
})
const myTemplate = [
    {label: "About",
     click: _=>{
        console.log("You clicked me!")
        }
    },
    {label: "Home",
     click: _=>{
        console.log("You are home, silly.")
        }
    },
    {label: "Archive",
     click: _=>{
        console.log("Redirecting to archive.")
        mainWindow.loadURL(`file://${__dirname}/tasks.html`)
        }
    }
]
app.setJumpList({
    type: custom,
    name: tasks,
    items: [
        {name: Task1}
    ]
})