import React from "react";
import { RadioButton, RadioGroup } from 'react-radio-group-context';

export const Radio = (props) => {
        return (
            // <div className = { props.className }>
                <RadioGroup
                    name = { props.name }
                    selected = { props.selected }
                    onChange = { props.onChange }
                    className = { props.labelClass }
                >
                    { props.options.map((option)=>{
                            return (
                                    <RadioButton key={option.id} id={ option.id }> { option.label } </RadioButton>  
                                )
                    })
                    }
                </RadioGroup>
            // </div>
        )
}