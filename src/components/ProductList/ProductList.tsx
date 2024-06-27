import { useContext, useEffect, useState } from 'react';
import module from './ProductList.module.css';
import ProductContainer from './ProductContainer/ProductContainer';
import { ProductContext } from '../../context/ProductsProvider';
import Filters from './Filters/Filters';
import { ColorsContext } from '../../context/ColorsProvider';


const ProductList = () => {
    const products : Product[] = useContext(ProductContext);
    const colors : string[] = useContext(ColorsContext);
    const [gender, setGender] = useState('All');
    const [color, setColor] = useState('All');
    const genders = ['M', 'F', 'All'];
    
    const filteredProducts = products.filter(product => 
      (gender === 'All' || product.sex === gender) && 
      (color === 'All' || product.color === color)
  );

    return (
        <>
        <div id={module.filtersContainer}>
          <Filters items={genders} value={gender} setValue={setGender}/>
          <Filters items={colors} value={color} setValue={setColor}/>
        </div>
        <div id={module.productsContainer}>
         
          <br/>
          {filteredProducts.map(product => (
            <div key={product.id} className={module.product}>
               <ProductContainer id={module.product} product={product}/>
            </div>
          ))}
        </div>
        </>
    );
}

export default ProductList;