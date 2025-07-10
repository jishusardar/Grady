import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Logo() {
  return (
    <Link href={'/'} className='flex items-center gap-2'>
        <Image src={'/logo.png'} alt='logo'
        width={130} height={160} />
    </Link>
  )
}

export default Logo
