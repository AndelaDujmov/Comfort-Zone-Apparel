import { useContext, useState } from "react";
import { ProductContext } from "../../../../context/ProductsProvider";
import module from './ProductDetails.module.css';
import { useParams } from "react-router-dom";
import Image from "../../Image/Image";
import Name from "../Name/Name";
import ActionButton from "../Button/ActionButton";
import SelectListItems from "../SelectList/SelectListItems";
import { SizeContext } from "../../../../context/SizeProvider";
import { ColorsContext } from "../../../../context/ColorsProvider";
import Description from "../Description/Description";
import Price from "../Price/Price";
import Quantity from "../Quantity/Quantity";
import Materials from "../Materials/Materials";


const ProductDetails = () => {
    const products = useContext(ProductContext);
    const sizes = useContext(SizeContext);
    const colors = useContext(ColorsContext);
    console.log(sizes);
    const {id} = useParams();
    const [count, setCount] = useState(0);
    const product : Product = products.find(product => product.id == id);
    
    return (
        <>
        <div id={module.container}>
            <div id={module.image}>
                <Image imageSrc={product.imageSrc}/>
            </div>
            <div id={module.details}>
                <div>
                    <Name name={product.name}/>
                </div>
                <div>
                    <Price price={product.price}/>
                </div>
                <div>
                    <Description description={product.description}/>
                </div>
                <div className={module.selectList}>
                    <SelectListItems items={sizes}/>
                </div>
                <div className={module.selectList}>
                    <SelectListItems items={colors}/>
                </div>
                <div>
                    <Quantity />
                </div>
                <div>
                    <ActionButton count={count} setCount={setCount}/>
                </div>  
                <div>
                    <Materials materials={product.materials}/>
                </div> 
            </div>
        </div>
        </>
    )
}

export default ProductDetails;