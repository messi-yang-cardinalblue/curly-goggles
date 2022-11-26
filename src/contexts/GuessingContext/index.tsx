import { createContext, useState, useMemo, useCallback } from 'react';
import GuessingApi from '@/api/GuessingApi';
import GuessingEntity from '@/entities/GuessingEntity';

type GuessingContextValue = {
  guessing: GuessingEntity | null;
  createGuessing: (author: string, prompt: string, parentId: string | null) => void;
  queryGuessing: (id: string) => void;
};

function createInitialGuessingContextValue(): GuessingContextValue {
  return {
    guessing: null,
    createGuessing: () => {},
    queryGuessing: () => {},
  };
}

const GuessingContext = createContext<GuessingContextValue>(createInitialGuessingContextValue());

type Props = {
  children: JSX.Element;
};

export function Provider({ children }: Props) {
  const guessingApi = useMemo(() => GuessingApi.createGuessingApi(), []);
  const [guessing, setGuessing] = useState<GuessingEntity | null>(null);

  const createGuessing = useCallback(async (author: string, prompt: string, parentId: string | null) => {
    guessingApi.createGuessing(author, prompt, parentId);
  }, []);

  const queryGuessing = useCallback(async (id: string) => {
    const returnedGuessing = await guessingApi.getGuessing(id);
    setGuessing(returnedGuessing);
  }, []);

  const guessingContextValue: GuessingContextValue = useMemo(
    () => ({
      guessing,
      createGuessing,
      queryGuessing,
    }),
    [guessing, createGuessing, queryGuessing]
  );

  return <GuessingContext.Provider value={guessingContextValue}>{children}</GuessingContext.Provider>;
}

export default GuessingContext;
