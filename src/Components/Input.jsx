import React from "react";

export default function Input({ label, value, onChange, placeholder }) {
  return (
    <div className='flex flex-col'>
      <label>{label}</label>
      <input
        className='bg-gray-100 border-2 text-black rounded-lg p-1'
        type='text'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
