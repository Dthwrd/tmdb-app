import React from 'react'
import PopularMovies from './components/PopularMovies'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Movie | Popular",
  description: "Generated by create next app",
};

const Page = () => {
  return (
    <PopularMovies />
  )
}

export default Page