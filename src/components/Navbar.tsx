
import { getAuthSession } from '@/lib/nextauth'
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';

import SigninButton from './SigninButton';
import GithubButton from './GithubButton';
import UserAccountNav from './UserAccountNav';
import { ThemeToggle } from './ThemeToggle';


type Props = {}

const Navbar = async(props: Props) => {
  

  const session = await getAuthSession();
   
  return (<div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300  py-2 ">
  <div  className='flex justify-between'>
    <div className="flex items-start justify-between h-full gap-2 px-8  max-w-7xl">
          <Link href={"/"}>
           <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            OK-Quizz
            </p>
           </Link>
     </div> 
      <div className='flex items-end justify-end gap-4 pr-4 '>
        <GithubButton/>
        <div className='pr-4'>
        <ThemeToggle />
        </div>
        
        {session?.user.name ? (
          <UserAccountNav user={session.user}/>
        ):(
          <SigninButton text='Sign In'/>
        )}
        
      </div>

    
  </div>
</div>
  )
  
}

export default Navbar