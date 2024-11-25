"use client"
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import React from 'react'
import { useDebouncedCallback } from 'use-debounce';

function search() {

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const handleChange = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', 1);
    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathName}?${params}`);

  }, 300)

  console.log(searchParams)
  console.log(pathName)

  return (
    <div className='p-5 w-full'>
      <input className='border-2 border-black w-full p-3' onChange={handleChange} type="text" placeholder='Search anything here...' />
    </div>
  )
}

export default search