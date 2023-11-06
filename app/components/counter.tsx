import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../state/store';
import { Flex, Button, Text } from '@chakra-ui/react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { decrement, increment } from '../state/counter/counterSlice';

const Counter = () => {
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();
	return (
		<Flex gap='10px'>
			<Button
				leftIcon={<FaMinus />}
				onClick={() => dispatch(decrement())}
				colorScheme='orange'
			>
				Decrement
			</Button>
			<Text
				px='10px'
				fontSize='24px'
				fontWeight='bold'
				w='100px'
				bgColor='slategray'
				border='1px solid'
				borderRadius='8px'
				color='white'
				textAlign='center'
        size='lg'
			>
				{count}
			</Text>
			<Button
				rightIcon={<FaPlus />}
				onClick={() => dispatch(increment())}
				colorScheme='orange'
			>
				Increment
			</Button>
		</Flex>
	);
};

export default Counter;
