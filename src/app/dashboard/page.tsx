import { getAuthSession } from '@/lib/nextauth'
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {}

export const metadata ={
  title:"Dashboard | Ok-Quizz",
  description:"Dashboard of the user"
}

const page = async(props: Props) => {
  const session = await getAuthSession();
  if(!session?.user){
    return redirect("/");
  }
  return (
    <div>page</div>
  )
}

export default page