import React from "react";

export const Select = (props) => {
    return (
            <select
                className = { props.className }
                name = { props.name }
                defaultValue = ''
                required = { props.required }
                onChange = { props.onChange }
            > 
                <option value="" disabled>--Select Employee's Account Type--</option>
                { props.selectOptions.map(option => <option value = { option.value } key = { option.id }> { option.label } </option>)}
            </select>     
    )
}