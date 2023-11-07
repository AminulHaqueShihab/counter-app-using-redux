import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../state/store';
import { Flex, Button, Text, Input } from '@chakra-ui/react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import {
	decrement,
	increment,
	incrementByAmount,
} from '../state/counter/counterSlice';

const Counter = () => {
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();
	return (
		<Flex gap='20px' direction='column' alignItems='center'>
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
					onClick={() => dispatch(incrementByAmount(100))}
					colorScheme='orange'
				>
					Increment
				</Button>
			</Flex>
			<Flex gap='10px'>
				<Button
					leftIcon={<FaMinus />}
					onClick={() => dispatch(decrement())}
					colorScheme='orange'
				>
					Decrement
				</Button>
				<Input
					placeholder='Amount'
					w='150px'
					border='1px solid'
					fontSize='24px'
					fontWeight='bold'
					textAlign='center'
					_placeholder={{
						fontsize: '12px',
						fontWeight: '400',
						color: 'gray.200',
					}}
				/>
				<Button
					rightIcon={<FaPlus />}
					onClick={() => dispatch(incrementByAmount(100))}
					colorScheme='orange'
				>
					Increment
				</Button>
			</Flex>
		</Flex>
	);
};

export default Counter;
