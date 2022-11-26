import { createContext, useMemo, useCallback } from 'react';
import GuessingApi from '@/api/GuessingApi';

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
  const guessingApi = useMemo(() => GuessingApi.createGuessingApi(), []);

  const createGuessing = useCallback((author: string, prompt: string, parentId: string | null) => {
    guessingApi.createGuessing(author, prompt, parentId);
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
