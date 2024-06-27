import { useContext } from 'react';
import module from './ProductList.module.css';
import ProductContainer from './ProductContainer/ProductContainer';
import { ProductContext } from '../../context/ProductsProvider';


const ProductList = () => {
    const products : Product[] = useContext(ProductContext);

    return (
        <div id={module.productsContainer}>
          {products.map(product => (
            <div key={product.id}>
               <ProductContainer id={module.product} product={product}/>
            </div>
          ))}
        </div>
    );
}

export default ProductList;