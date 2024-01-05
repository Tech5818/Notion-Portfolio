'use client';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';
import theme from './theme';

type ContextType = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

const defaultContext: ContextType = {
  name: '',
  setName: () => {},
};

const Context = createContext(defaultContext);

export const Provider = ({ children }: PropsWithChildren) => {
  const [name, setName] = useState('');
  useEffect(() => {
    console.log(theme.config.initialColorMode);
  });
  return (
    <>
      <ChakraProvider resetCSS theme={theme}>
        <Context.Provider value={{ name, setName }}>
          {children}
        </Context.Provider>
      </ChakraProvider>
    </>
  );
};
