import React from "react";

export const Textarea = (props, {className, name, placeholder, required, _handleInputChange}) => {
    return (
                <textarea
                    className = { className }
                    name = { name }
                    placeholder = { placeholder } 
                    required = { required }
                    onChange = { _handleInputChange }
                    {...props}
                /> 
            
    )
}