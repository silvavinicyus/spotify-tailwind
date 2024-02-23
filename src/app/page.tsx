
import { Footer } from '@/components/footer';
import { PlaylistCard } from '@/components/playlist-card';
import { PlaylistRow } from '@/components/playlist-row';
import { Sidebar } from '@/components/sidebar';
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">      
      <div className="flex flex-1">         
        <Sidebar /> 
        
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-2'>
              <LucideChevronLeft />
            </button>

            <button className='rounded-full bg-black/40 p-2'>
              <LucideChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>                    
            <PlaylistRow />
            <PlaylistRow />
            <PlaylistRow />
            <PlaylistRow />
            <PlaylistRow />
            <PlaylistRow />                                      
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Vinícyus Silva</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
          </div>
        </main>
      </div>  

      <Footer />          
    </div>
  );
}
