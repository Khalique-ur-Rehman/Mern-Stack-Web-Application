import React, { useState } from 'react';
import Home from './Components/Home';
import ProductForm from './Components/ProductForm';
import ProductList from './Components/ProductList';
function App() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };
  return (
    <div>
      


    </div>
  );
}
export default App;
