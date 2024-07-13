"use client"

import { useState } from 'react'
import Image from 'next/image'

const Search = () => {
    const [query,setQuery]=useState('');

  return (
    <div className='flex-center min-h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2'>
        <Image src="/assets/icons/search.svg" alt="search" width={24} height={24}/>
    </div>
  )
}

export default Search