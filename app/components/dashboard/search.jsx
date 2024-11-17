"use client"
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import React from 'react'

function search() {

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const handleChange = (e) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathName}?${params}`);

  }

  console.log(searchParams)
  console.log(pathName)

  return (
    <div className='p-5 '>
      <input className='border-2 border-black p-3' onChange={handleChange} type="text" placeholder='Search anything here...' />
    </div>
  )
}

export default search