'use client';
import {
	ColorModeScript,
	Flex,
	Heading,
	IconButton,
	useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import theme from '../theme';
import { MdDarkMode } from 'react-icons/md';
import { FaSun } from 'react-icons/fa';

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Flex px='500px' py='20px' justify='center' w='full'>
			<Flex
				justify='space-between'
				bg='salmon'
				w='full'
				alignItems='center'
				p='15px'
				borderRadius='8px'
			>
				<Heading>COUNTER</Heading>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<IconButton
					aria-label='dark mode'
					onClick={toggleColorMode}
          colorScheme='transparent'
					// bg='transparent'
					icon={
						colorMode === 'light' ? (
							<MdDarkMode size='36px' color='slate' />
						) : (
							<FaSun size='28px' color='yellow' />
						)
					}
				/>
			</Flex>
		</Flex>
	);
};

export default Navbar;
