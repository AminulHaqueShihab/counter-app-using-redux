// app/providers.tsx
'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './state/store';
 function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			<CacheProvider>
				<ChakraProvider>{children}</ChakraProvider>
			</CacheProvider>
		</Provider>
	);
}
export default Providers;
