import module from './ProductContainer.module.css'

interface ContainerProps {
    product: Product;
}

const ProductContainer = ({ product } : ContainerProps) => {
    
    return (
        <>
           <div id={module.container}>
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
