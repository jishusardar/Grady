import React from 'react'
import Image from 'next/image'

function header() {
  return (
    <div>
        <Image src={'./logo.svg'}
        alt='logo'
        width={160}
        height={100}
        />
    </div>
  )
}
export default header