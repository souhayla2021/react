import React from "react";

export const Inputs = (props) => {
    return (
            props.inputs.map((input)=>{
                return ( 
                    <label htmlFor = { input.name } key = { input.name } className = { props.labelClass }> 
                       { input.label }
                        <input 
                            className = { props.className + input.error_class}
                            key = { input.name }
                            type = { input.type }
                            name = { input.name }
                            placeholder = { input.placeholder } 
                            required = { input.required }
                            onChange = { props.onChange }
                            formNoValidate
                        /> 
                        <div className='form-error' id = { input.name }> { input.error } </div>
                    </label>
                )
            })
    )
}
