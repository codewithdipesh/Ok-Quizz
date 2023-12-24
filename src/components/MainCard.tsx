"use client"
import React from 'react'
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import {GitHubLogoIcon} from '@radix-ui/react-icons'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from './ui/button'
import SigninButton from './SigninButton'

const MainCard = () => {
  return (
    <>
    <div className='absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2'>
    <Card className='w-[300px]'>
    <CardHeader>
        <CardTitle className='flex text-xl font-md'>Welcome To Ok-Quizz<span role="img" aria-label="fire">🔥</span></CardTitle>
        <CardDescription>Ok-Quizz is a quiz app that allows you to create and share quizzes about any topic </CardDescription>
      </CardHeader>
    <CardContent className='flex items-centre  gap-4'>
    <SigninButton text='Sign In with Email' emaillogo='emaillogo'/>
    </CardContent>
    </Card>

    </div>
   
    </>
  )
}

export default MainCard