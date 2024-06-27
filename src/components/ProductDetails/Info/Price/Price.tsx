import module from './Price.module.css';

const Price = ({price} : Product) => {
    return (
    <>
        <div id={module.container}>
            <p>{price} kr.</p>
        </div>
    </>)
}

export default Price;