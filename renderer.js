// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {BrowserWindow} = require('electron').remote
const path = require('path')

const newWindowBtn = document.getElementById('new-window')

newWindowBtn.addEventListener('click', (event) => {
//   const modalPath = path.join('file://', __dirname, '../../sections/windows/modal.html')
  const modalPath = path.join('file://', __dirname, './index.html')
  let win = new BrowserWindow({ width: 400, height: 320 })

  win.on('close', () => { win = null })
  win.loadURL(modalPath)
  win.show()
})

// f5 to reload and f12 to dev tools bind
// document.addEventListener("keydown", function (e) {
//   if (e.which === 123) {
//     require('remote').getCurrentWindow().toggleDevTools();
//   } else if (e.which === 116) {
//     location.reload();
//   }
// });