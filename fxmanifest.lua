fx_version 'cerulean'
game { 'gta5' }

dependency 'vue'
dependency 'yarn'

vue_entry 'ui/src/main.ts'

name 'Typescript Resource'
description 'A Typescript resource using Vue3, Pinia and tailwindcss for UI Boilerplate'
author 'fingerguns#0001'

client_scripts {
    'resource/dist/client/client.js'
}

server_scripts {
    'resource/dist/server/server.js'
}

ui_page 'ui/dist/index.html'

files { 
    'ui/dist/index.html',
    'ui/dist/index.js',
    'ui/dist/style.css'
}