import React from 'react'
import Favorite from './components/Favorite'
import { Metadata } from 'next'

export const generateMetadata = (): Metadata => {
  return {
    title: "Favorite"
  }
}

const Page = () => {
  return (
    <Favorite />
  )
}

export default Page