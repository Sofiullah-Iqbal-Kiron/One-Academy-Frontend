import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
// import Demo from './components/Demo.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <ThemeProvider attribute='class' defaultTheme='system'>
        <main className="text-foreground bg-background">
          <App />
        </main>
      </ThemeProvider>
    </NextUIProvider>
  </React.StrictMode>,
)
