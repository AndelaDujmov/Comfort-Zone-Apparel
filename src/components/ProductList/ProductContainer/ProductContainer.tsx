import { useNavigate } from 'react-router-dom';
import module from './ProductContainer.module.css'

interface ContainerProps {
    product: Product;
}

const ProductContainer = ({ product } : ContainerProps) => {

    const navigation = useNavigate();
    
    const handleClick = () => {
        navigation(`/details/${product.id}`);
    }

    return (
        <>
           <div id={module.container} onClick={handleClick}>
            <div id={module.imgContainer}>
                <img id={module.image} src={product.imageSrc}></img>
            </div>
            <div id={module.textContainer}>
                <p>{product.name}</p>
                <small>{product.price} kr.</small>
            </div>
           </div>
        </>
    );
};

export default ProductContainer;
