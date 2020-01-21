import React from 'react'

const Form  = props => {
    return (

        <form>
            <input 
            type="text" 
            value={props.value}
            onChange={props.change}
            placeholder="Type in city name"
            />
        </form>
        
    )
}

export default Form