import React from 'react'

const InputBox = (props) => {
    const changeHandler = (e) => {
        const updatedData = {...props.formData,[e.target.name]: e.target.value}
        props.setFormData(updatedData)
        console.log(props.formData)
    }
  return (
    <div className='flex flex-col gap-2'>
        <p className='text-[9px] font-black uppercase tracking-widest text-gray-500 ml-4'>{props.label || ""}</p>
        <input onChange={changeHandler} type={props.type} 
            name={props.name} placeholder={props.placeholder}
            className='bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 text-sm placeholder:text-gray-700 font-bold transition-all'
        />
    
    </div>
  )
}

export default InputBox