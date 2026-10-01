import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/InstantMart/">
            <Toaster
            position="top-right"
            toastOptions={{
                duration: 3000,

                style: {
                    background: "var(--color-surface)",
                    color: "var(--color-text-primary)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "12px",
                    padding: "12px 16px",
                    fontSize: "14px",
                    fontWeight: "500",
                    boxShadow: "0 10px 30px rgba(0, 69, 33, 0.12)",
                },

                success: {
                    iconTheme: {
                        primary: "var(--color-primary)",
                        secondary: "#ffffff",
                    },
                },

                error: {
                    iconTheme: {
                        primary: "var(--color-error)",
                        secondary: "#ffffff",
                    },
                },
            }}
        />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
