import module from './Materials.module.css';

const Materials = ({materials} : Product) => {
    return (
        <> 
            <div id={module.container}>
                <h3 id={module.header}>Materials</h3>
                <p id={module.text}>{materials.join(' / ')}</p>
            </div>
        </>
    )
}

export default Materials;