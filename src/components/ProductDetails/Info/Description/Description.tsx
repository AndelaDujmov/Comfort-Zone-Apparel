import module from  './Description.module.css';

const Description = ({description} : Product) => {
    return (
        <>
            <div id={module.container}>
                <p id={module.text}>{description}</p>
            </div>
        </>
    )
}

export default Description;