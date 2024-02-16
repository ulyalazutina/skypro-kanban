import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/user.jsx'
import { CardProvider } from './contexts/card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <CardProvider>
                    <App />
                </CardProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
