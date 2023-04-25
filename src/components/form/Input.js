import React from 'react'

export const Input = ({label,placeholder,type,extraLabel,inputmode,onChange,id,errorMessage}) => {
    return (
    <div className="mb-4">
        <label htmlFor={label} className="block text-xs font-medium text-gray-700">
            {label}
            <p className="py-1 text-gray-400">{extraLabel}</p>
        </label>

        <input
            type={type}
            id={id}
            placeholder={placeholder}
            className="form-style"
            inputMode={inputmode}
            onChange={onChange}
        />
        <p className="text-xs text-red-500">{errorMessage}</p>
    </div>
    )
}