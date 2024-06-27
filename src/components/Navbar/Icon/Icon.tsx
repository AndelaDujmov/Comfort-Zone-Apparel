import module from './Icon.module.css';

const Icon = () => {
    return (
        <>
        <div id={module.container}>
            <img id={module.icon} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFImqXBTHwhmS-b64mWr4aa06rIZ9NY0X6Iw&s" />
        </div>
        </>
    )
}

export default Icon;