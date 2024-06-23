import './App.css'
import ProductList
from './components/ProductList/ProductList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails/Info/Details/ProductDetails';
import { ProductProvider } from './context/ProductsProvider';

function App() {
  return (
    <>
    <ProductProvider>
      <Router>
        <Routes>
          <Route path='/' element={<ProductList />}/>
          <Route path='/details' element={<ProductDetails />} />
        </Routes>
      </Router>
    </ProductProvider>
    </>
   
  )
}

export default App
