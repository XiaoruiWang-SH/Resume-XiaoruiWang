/*
 * @Author: Xiaorui Wang
 * @Email: xiaorui.wang@usi.ch
 * @Date: 2025-03-14 19:04:14
 * @LastEditors: Xiaorui Wang
 * @LastEditTime: 2025-05-06 17:31:49
 * @Description: 
 * Copyright (c) 2025 by Xiaorui Wang, All Rights Reserved. 
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import AppIOS from './App-ios.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <AppIOS /> */}
  </StrictMode>,
)
