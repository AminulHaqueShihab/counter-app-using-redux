"use client";
import { Flex } from '@chakra-ui/react'


import Counter from './components/counter'

export default function Home() {
  return (
    <Flex mx='auto' justifyContent='center' alignItems='center' py='100px'><Counter /></Flex>
  )
}
