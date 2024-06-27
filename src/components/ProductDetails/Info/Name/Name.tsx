import module from './Name.module.css';

const Name = ({ name } : Product) => {
    return(
        <>
        <div id={module.container}>
            <h1 id={module.text}>{name}</h1>
        </div>
        </>
    )
}

export default Name;