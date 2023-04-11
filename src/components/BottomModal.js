import React from 'react'
import {faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'animate.css';

export const BottomModal = ({onClick,children ,title ,setTabProps,className}) => {
    return (
        <div className="sticky bottom-0 z-50 flex flex-col justify-end h-screen shadow-xl bg-gray-800/50">
        <div className={`bg-white shadow-xl pb-6 animate__animated animate__fadeInUp ${className}`}>
            <div className="flex items-center justify-between p-4 mb-4 font-semibold bg-white border-b border-primary-400">
                <h1 className="text-primary-600">{title}</h1>
                <button 
                    onClick={onClick}>
                    <FontAwesomeIcon className="text-2xl text-primary-600" icon={faCircleXmark} />
                </button>
            </div>
            {children}
        </div>
    </div>
    )
}