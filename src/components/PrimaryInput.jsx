import React from 'react'

const PrimaryInput = ({placeholder, value, onChange}) => {
  return (
      <div className='bg-white rounded-lg border py-2 shadow-md border-gray-400 mt-5 px-2'>
          <input className='w-full outline-none' placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}

export default PrimaryInput