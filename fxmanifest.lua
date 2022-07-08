fx_version 'cerulean'
game { 'gta5' }

dependency 'vue'
dependency 'yarn'

vue_entry 'ui/src/main.ts'

name 'Typescript Resource'
description 'A Typescript resource using Vue3, Pinia and Tailwindcss for UI Boilerplate'
author 'fingerguns#0001'

client_scripts {
    'dist/client/client.js',
    'dist/client/*.lua
}

server_scripts {
    'dist/server/server.js',
    'dist/server/*.lua
}

ui_page 'dist/ui/index.html'

files { 
    'dist/ui/index.html',
    'dist/ui/assets/*.js',
    'dist/ui/assets/*.css'
}