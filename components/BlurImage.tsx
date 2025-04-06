import React from 'react'

// import { getPlaiceholder } from 'plaiceholder'
import Image from 'next/image'
import { base64 } from './base64'

export function BlurImage({
  src,
  alt,
  width,
  height,
  className,
  objectFit = 'contain',
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  objectFit?: any
}) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      blurDataURL={base64}
      placeholder='blur'
      alt={alt}
      className={className}
      style={{ objectFit: objectFit }}
      quality={10}
      unoptimized
      loading='lazy'
    />
  )
}

export default BlurImage
