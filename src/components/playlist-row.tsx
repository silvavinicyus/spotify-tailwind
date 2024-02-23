import Image from 'next/image'
import { LucidePlay } from 'lucide-react'

export function PlaylistRow() {
  return (
    <a href="" className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'> 
      <Image src="/album.jpg" width={104} height={104} alt="Capa do Album Meteora"/>              
      <strong> Meteora </strong>
      <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
        <LucidePlay />
      </button>
    </a>
  )
}