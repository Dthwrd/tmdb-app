import React from 'react'
import WatchList from './components/WatchList'
import { Metadata } from 'next'

export const generateMetadata = (): Metadata => {
  return {
    title: "Watch List"
  }
}

const Page = () => {
  return (
    <WatchList />
  )
}

export default Page