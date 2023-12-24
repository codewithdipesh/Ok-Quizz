"use client"
import { User } from 'next-auth'
import React from 'react'
import { DropdownMenu,DropdownMenuGroup ,DropdownMenuSubTrigger,DropdownMenuPortal,DropdownMenuSubContent ,DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuSub } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog'
import UserAvatar from './UserAvatar'
import {  useRouter } from 'next/router'

type Props = {
    user:Pick<User,"name" | "email" | "image">}

const UserAccountNav = ({user}: Props) => {
  
  return (
   <DropdownMenu>
    <DropdownMenuTrigger>
      <UserAvatar user={{
        name:user.name ||null,
        image:user.image || null
      }}/>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <div className='font-bold pl-2 pr-2'>{user.name}</div>
      <div className=' pl-2 pr-2'>{user.email}</div>
    <DropdownMenuSeparator/>
    <DropdownMenuItem >
    <Link href='/' className='text-base'>Performance </Link>
    </DropdownMenuItem>
     <DropdownMenuItem>
       <Link href='/' className='text-base'>Invite Friends </Link>
      </DropdownMenuItem>    
     <DropdownMenuSeparator/>

     <DropdownMenuItem onSelect={(event) => {
            event.preventDefault();
            signOut().catch(console.error).then(()=>{
              
            });}} className="text-red-600 cursor-pointer">
           Sign out
          <LogOut className="w-4 h-4 ml-2 " />
            
     </DropdownMenuItem>
      
    
    </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAccountNav