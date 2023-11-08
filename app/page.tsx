"use client";
import { Button, Flex, IconButton } from '@chakra-ui/react'
import { MdDarkMode } from 'react-icons/md'

import Counter from './components/counter'

export default function Home() {
  return (
		<Flex
			mx='auto'
			justifyContent='center'
			alignItems='center'
			py='100px'
			gap='50px'
		>
			<Counter />
		</Flex>
	);
}
