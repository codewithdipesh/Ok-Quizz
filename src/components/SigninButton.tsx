"use client"
import { EnvelopeOpenIcon } from '@radix-ui/react-icons'
import GitHubLogoIcon from '@radix-ui/react-icons'
import { FacebookIcon } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'


type Props = {text:string,emaillogo?:string}

const SigninButton = ({text,emaillogo}: Props) => {
  return (
    <Button className= {' flex bg-slate-950 hover:bg-slate-700'} onClick={() => {
        signIn("google").catch((error)=>{console.log(error)})
    }
    }>
      {emaillogo && <EnvelopeOpenIcon className="mr-2 h-4 w-4" />}
        {text}
    </Button>
  )
}

export default SigninButton