import React, { useState } from 'react'; // Import React
import Navbar from './components/Navbar/Navbar'; // Import the Navbar component
import { Route, Routes } from 'react-router-dom'; // Import Route and Routes from react-router-dom
import Home from './pages/Home/Home'; // Import the Home component
import Cart from './pages/Cart/Cart'; // Import the Cart component
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'; // Import the PlaceOrder 
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';  
import Verify from './pages/Verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders';


// Define the App component
const App = () => {
  // Return the JSX for the App component

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>  
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
    <div className='app'> {/* Container for the app */}
      <Navbar setShowLogin={setShowLogin} /> {/* Navbar component */}
        <Routes> {/* Define the routes for the app */}
          <Route path='/' element={<Home />} /> {/* Route for the Home component */}
          <Route path='/cart' element={<Cart />} /> {/* Route for the Cart component */}
          <Route path='/order' element={<PlaceOrder />} /> {/* Route for the PlaceOrder component */}
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
        </Routes>
    </div>
    <Footer />
    </>
  );
};

export default App; // Export the App component

// The App component sets up the structure of the entire application, defining routes and rendering components based on the URL.
// If showLogin is true, the LoginPopup is displayed; otherwise, it remains hidden.
// The Navbar allows users to navigate through different routes and can trigger the login popup.
// Each route is associated with a specific page component, rendering the appropriate content based on the URL.
// The Footer component is always rendered at the bottom of the page, providing consistent footer content across all routes.