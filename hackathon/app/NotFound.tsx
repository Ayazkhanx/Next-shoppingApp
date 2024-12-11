import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h1 className='text-center text-5xl'> The Page You are Looking for Does not Exist</h1>
      <h1 className='text-center text-2xl'><Link href={'/'} >Go to Home Page</Link> </h1>
    </div>
  )
}
