import './App.css'
import ProductList
from './components/ProductList/ProductList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails/Info/Details/ProductDetails';
import { ProductProvider } from './context/ProductsProvider';
import { SizeProvider } from './context/SizeProvider';
import { ColorsProvider } from './context/ColorsProvider';

function App() {
  return (
    <>
    <ProductProvider>
      <SizeProvider>
        <ColorsProvider>
          <Router>
            <Routes>
              <Route path='/' element={<ProductList />}/>
              <Route path='/details/:id' element={<ProductDetails />} />
            </Routes>
          </Router>
      </ColorsProvider>
      </SizeProvider>
    </ProductProvider>
    </>
   
  )
}

export default App
