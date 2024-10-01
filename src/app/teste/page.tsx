import React from 'react'
import { getAllImagesFromFolder } from '../lib/utils'
import Image from 'next/image'

const Page = () => {
  const imagens = getAllImagesFromFolder('imagens_carrossel')
  return (
    <div>
      {imagens.map((image : string) => (
        <Image key={image} src={image} alt={image} width={800} height={500}/>
      ))}

    </div>
  )
}

export default Page