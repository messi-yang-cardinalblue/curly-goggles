import { createContext, useMemo, useCallback } from 'react';

type GuessingContextValue = {
  createGuessing: (author: string, prompt: string, parentId: string | null) => void;
};

function createInitialGuessingContextValue(): GuessingContextValue {
  return {
    createGuessing: () => {},
  };
}

const GuessingContext = createContext<GuessingContextValue>(createInitialGuessingContextValue());

type Props = {
  children: JSX.Element;
};

export function Provider({ children }: Props) {
  const createGuessing = useCallback((author: string, prompt: string, parentId: string | null) => {
    // @ts-ignore
    console.log(author, prompt, parentId);
    // Do your fetch request here!
  }, []);

  const guessingContextValue: GuessingContextValue = useMemo(
    () => ({
      createGuessing,
    }),
    [createGuessing]
  );

  return <GuessingContext.Provider value={guessingContextValue}>{children}</GuessingContext.Provider>;
}

export default GuessingContext;
