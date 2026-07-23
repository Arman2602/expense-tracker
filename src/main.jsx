import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TransactionProvider } from './context/TransactionContext.jsx'
import { SearchProvider } from './context/SearchContext.jsx'
import { BudgetProvider } from './context/BudgetContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SearchProvider>
      <TransactionProvider>
        <BudgetProvider>
          <App />
        </BudgetProvider>
      </TransactionProvider>
    </SearchProvider>
  </BrowserRouter>,
)
