import Link from 'next/link'
import React from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import LogoImage from '@/logos/random.svg'


function Logo() {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-72 h-14">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image
            priority
            src={LogoImage}
            width={48}
            height={48}
            alt="Random logo"
            className="rounded-full dark:filter dark:invert"
          />
        </AspectRatio>
      </div>
    </Link>
  )
}

export default Logo