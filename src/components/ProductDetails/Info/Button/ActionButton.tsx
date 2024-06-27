import Button from '@mui/material/Button';
import module from './ActionButton.module.css';

const ActionButton = ({count, setCount} : Count) => {
    return (
        <Button id={module.button} size="large" onClick={() => setCount(count+1)}>Add to the cart</Button>
    )
}

export default ActionButton;