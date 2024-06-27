import { useState } from "react";
import module from './Quantity.module.css';

const Quantity = () => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(value => value + 1);
    }

    const decrement = () => {
        setQuantity(value => value > 0 ? value - 1 : 0);
    }

    return (
        <>
            <div id={module.container}>
                <button className={module.controller} onClick={decrement}>&mdash;</button>
                <p id={module.display}>{quantity}</p>
                <button className={module.controller} onClick={increment}> &#xff0b;</button>
            </div>
        </>
    )
}

export default Quantity;