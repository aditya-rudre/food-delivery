import React from 'react'; // Import React
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering
import App from './App.jsx'; // Import the App component
import './index.css'; // Import the global CSS file
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter from react-router-dom for routing
import StoreContextProvider from './components/context/StoreContext.jsx'; // Import the StoreContextProvider

// Render the App component within the BrowserRouter and StoreContextProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* Enable routing in the app */}
    <StoreContextProvider> {/* Provide the store context to the app */}
      <App /> {/* Main App component */}
    </StoreContextProvider>
  </BrowserRouter>
);


// Context Provider (PlayerContextProvider) is wrapped around the App component to provide global data access.
// BrowserRouter enables routing for the entire application.
// React.StrictMode is used to enforce best practices during development.
// The entire component tree is rendered into the root element in the DOM using ReactDOM.createRoot.