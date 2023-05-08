import React, { useState } from 'react'
import './contactinputs.css'

const ContactInputs = (props) => {

    const [focused, setFocused] = useState(false)
    const { label, errorMessage, onChange, id, ...inputProps } = props

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className='mx-auto flex flex-col'>
            <label className='p-2 text-iris font-titan
            sm:text-xl
                      xl:text-2xl'>
                {label}
            </label>
            <input
                className='rounded bg-[#d4c0c0] border border-scred text-slate-800 font-[500] p-1
                sm:text-xl'
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                // onFocus={()=>inputProps.name==="confirmPassword" && setFocused(true)}
                focused={focused.toString()} />
            <span className='text-xs text-scred mt-2 error'>{errorMessage}</span>
        </div>
    )
}

export default ContactInputs