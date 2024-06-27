import module from './Image.module.css';

const Image = ({ imageSrc } : Product) => {
    return (
        <>
        <div>
            <img id={module.img} src={imageSrc}/>
        </div>
        </>
    )
}

export default Image;