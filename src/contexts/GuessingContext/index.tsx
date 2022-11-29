import { createContext, useState, useMemo, useCallback } from 'react';
import GuessingApi from '@/api/GuessingApi';
import GuessingEntity from '@/entities/GuessingEntity';
import GuessingNodeEntity from '@/entities/GuessingNodeEntity';

type GuessingContextValue = {
  guessing: GuessingEntity | null;
  guessingNode: GuessingNodeEntity | null;
  createGuessing: (author: string, prompt: string, parentId: string | null) => void;
  queryGuessing: (id: string) => void;
  queryGuessingNode: (id: string) => void;
};

function createInitialGuessingContextValue(): GuessingContextValue {
  return {
    guessing: null,
    guessingNode: null,
    createGuessing: () => {},
    queryGuessing: () => {},
    queryGuessingNode: () => {},
  };
}

const GuessingContext = createContext<GuessingContextValue>(createInitialGuessingContextValue());

type Props = {
  children: JSX.Element;
};

export function Provider({ children }: Props) {
  const guessingApi = useMemo(() => GuessingApi.createGuessingApi(), []);
  const [guessing, setGuessing] = useState<GuessingEntity | null>(null);
  const [guessingNode, setGuessingNode] = useState<GuessingNodeEntity | null>(null);

  const createGuessing = useCallback(async (author: string, prompt: string, parentId: string | null) => {
    guessingApi.createGuessing(author, prompt, parentId);
  }, []);

  const queryGuessing = useCallback(async (id: string) => {
    const returnedGuessing = await guessingApi.getGuessing(id);
    setGuessing(returnedGuessing);
  }, []);

  const queryGuessingNode = useCallback(async (id: string) => {
    const returnedGuessingNode = await guessingApi.getGuessingTree(id);
    setGuessingNode(returnedGuessingNode);
  }, []);

  const guessingContextValue: GuessingContextValue = useMemo(
    () => ({
      guessing,
      guessingNode,
      createGuessing,
      queryGuessing,
      queryGuessingNode,
    }),
    [guessing, guessingNode, createGuessing, queryGuessing, queryGuessingNode]
  );

  return <GuessingContext.Provider value={guessingContextValue}>{children}</GuessingContext.Provider>;
}

export default GuessingContext;
