// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { Provider } from 'react-redux'
import store from './Redux/store.ts'
import SolanaWalletProvider from './SolanaWalletProvider.tsx'
import { RecoilRoot } from 'recoil'
import { Analytics } from "@vercel/analytics/react"
createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <Provider store={store}>
      <SolanaWalletProvider>
        <RecoilRoot>
          <Analytics framework='vite' />
          <App />
        </RecoilRoot>
      </SolanaWalletProvider>
    </Provider>
  // </StrictMode>,
)
