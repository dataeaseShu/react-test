// 引入react和react-dom库文件
import React from 'react'
// 引入App.js文件
import App from './app'
import {createRoot} from 'react-dom/client' 

const container=document.getElementById('app');
const root=createRoot(container as HTMLElement);
root.render(<App/>);
