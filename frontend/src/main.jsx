import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './app.css'
import App from './App.jsx'
import store from './store/store.jsx'
import { Provider } from 'react-redux'
import AuthProvider from './auth_provider.jsx'



createRoot(document.getElementById('root')).render(

  <StrictMode>

    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </StrictMode>
)
