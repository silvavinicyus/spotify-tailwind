
import { LucideLaptop2, LucideLayoutList, LucideMaximize2, LucideMic2, LucidePlay, LucideRepeat, LucideShuffle, LucideSkipBack, LucideSkipForward, LucideVolume } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className='flex items-center gap-4'>
          <Image src="/album.jpg" width={56} height={56} alt="Capa do Album Meteora"/> 
          <div className='flex flex-col'>
            <strong className='font-normal'> In the end</strong>
            <span className='text-xs text-zinc-400'> Linkin Park </span>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-6'>
            <LucideShuffle size={20} className='text-zinc-200'/>
            <LucideSkipBack size={20} className='text-zinc-200'/>

            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
              <LucidePlay />
            </button>

            <LucideSkipForward size={20} className='text-zinc-200'/>
            <LucideRepeat size={20} className='text-zinc-200'/>            
          </div>

          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:25</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='h-1 rounded-full bg-zinc-100 w-10'> </div>
            </div>
            <span className='text-xs text-zinc-400'>3:45</span>
          </div>
        </div>

        <div className='flex items-center gap-4'>
            <LucideMic2 size={20}/>
            <LucideLayoutList size={20}/>
            <LucideLaptop2 size={20}/>
            <div className='flex items-center gap-2'>
              <LucideVolume size={20}/>
              <div className='h-1 rounded-full w-24 bg-zinc-600'>
                <div className='h-1 rounded-full bg-zinc-100 w-8'> </div>
              </div>
            </div>
            <LucideMaximize2 size={20}/>
        </div>
      </footer>
  )
}