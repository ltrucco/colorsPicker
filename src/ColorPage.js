import React, {useState} from 'react'
import Values from 'values.js'
import SingleColor from './SingleColor'


const ColorPage = () => {
 
    const [color, setColor] = useState('');
    const [error, setError] = useState(false)
    const [list, setList] = useState(new Values('#fababa').all(10))


    const handleSubmit = (e) =>{
        e.preventDefault();
        try{
            let colors = new Values(color).all(10)
            setList(colors)

            setError(false)
        }catch(error){
            setError(true)
            console.log(error);
        }
        

    }

    return (
        <>
            <section className="container">
                <h3>Color generator</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="#fababa"
                    className={`${error ?'error':null}`}></input>
                    <button className="btn" type="submit">Submit</button>
                </form>
            </section>
            <section className="colors">
                {list.map((color, index) =>{
                    return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
                    
                } )}
            </section>
        </>
    )
}

export default ColorPage
