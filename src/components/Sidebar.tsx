import { LucideHome, LucideLibrary, LucideSearch } from "lucide-react";

export function Sidebar() {
  return(
    <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
              <div className='w-3 h-3 rounded-full bg-red-500'/>
              <div className='w-3 h-3 rounded-full bg-yellow-500'/>
              <div className='w-3 h-3 rounded-full bg-green-500'/>
              
          </div>

          <nav className='space-y-5 mt-8'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <LucideHome />  
              Home 
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <LucideSearch />
              Search 
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <LucideLibrary />
              Your library 
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> Sons of Anarchy</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> Songs of Anarchy: Music from Sons of Anarchy</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> Daily Mix 1 </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> Daily Mix 2</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> Mix Melancolico </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> Mix de Linkin park </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> Descobertas da semana </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> Máquina do tempo </a>          
          </nav>
        </aside>      
  )
}