'use client';

import { ChakraProvider } from '@chakra-ui/react';
import React, { PropsWithChildren, createContext, useState } from 'react';
import theme from './theme';
import { Fonts } from './_font/Fonts';

type ContextType = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  mobile: boolean;
  setMobile: React.Dispatch<React.SetStateAction<boolean>>;
  pc: boolean;
  setPC: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultContext: ContextType = {
  name: '',
  setName: () => {},
  mobile: false,
  setMobile: () => {},
  pc: false,
  setPC: () => {},
};

export const Context = createContext(defaultContext);

export const Provider = ({ children }: PropsWithChildren) => {
  const [name, setName] = useState(defaultContext.name);
  const [mobile, setMobile] = useState(defaultContext.mobile);
  const [pc, setPC] = useState(defaultContext.pc);

  return (
    <>
      <ChakraProvider resetCSS theme={theme}>
        <Fonts />
        <Context.Provider
          value={{ name, setName, mobile, setMobile, pc, setPC }}
        >
          {children}
        </Context.Provider>
      </ChakraProvider>
    </>
  );
};
