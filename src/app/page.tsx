
import MainCard from '@/components/MainCard'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { getServerSession } from 'next-auth'
import { getSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const session = await getServerSession();
  if(session?.user){
    redirect("/dashboard");
  }

  return (
    <>
    <div>
      
      <MainCard/>
    </div>
    
     
     
     
    </>
  )
}

export default page