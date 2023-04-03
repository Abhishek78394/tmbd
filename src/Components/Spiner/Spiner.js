import React from 'react'
import loader from './loading.gif'
export default function Spiner() {
  return (
    <div className='mt-4 text-center'>
      <img src={loader} alt="loader" />
    </div>
  )
}
