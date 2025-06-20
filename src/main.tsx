/*
 * @Author: Xiaorui Wang
 * @Email: xiaorui.wang@usi.ch
 * @Date: 2025-03-14 19:04:14
 * @LastEditors: Xiaorui Wang
 * @LastEditTime: 2025-06-20 10:49:25
 * @Description: 
 * Copyright (c) 2025 by Xiaorui Wang, All Rights Reserved. 
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import AppIOS from './App-ios.tsx'
import { AppAdesso } from './App-adesso.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <AppIOS /> */}
    <AppAdesso />
  </StrictMode>,
)
