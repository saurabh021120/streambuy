import React,{useState} from 'react'

function Dashboardform(props) {
    const [input,setInput]=useState('');

    const handleChange = e =>{
        setInput(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*10000000),
            text: input
        });

        setInput('');
    };

    return (
        <form className="formcss" onSubmit={handleSubmit} autocomplete="off">
            <input 
                type="url"
                placeholder="Add stream"
                value={input}
                name="text"
                className="inputcss"
                onChange={handleChange}
            />
            <button className="buttoncss">ADD</button>
        </form>
    )
}

export default Dashboardform;
