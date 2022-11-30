import { createContext, useState, useMemo, useCallback, useEffect } from 'react';
import GuessingApi from '@/api/GuessingApi';
import GuessingEntity from '@/entities/GuessingEntity';
import GuessingNodeEntity from '@/entities/GuessingNodeEntity';

type GuessingContextValue = {
  guessing: GuessingEntity | null;
  outputGuessing: GuessingEntity | null;
  guessingNode: GuessingNodeEntity | null;
  createGuessing: (author: string, prompt: string, parentId: string | null) => void;
  queryGuessing: (id: string) => void;
  queryGuessingNode: (id: string) => void;
};

function createInitialGuessingContextValue(): GuessingContextValue {
  return {
    guessing: null,
    outputGuessing: null,
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
  const [outputGuessing, setOutputGuessing] = useState<GuessingEntity | null>(null);
  const [guessingNode, setGuessingNode] = useState<GuessingNodeEntity | null>(null);

  const createGuessing = useCallback(async (author: string, prompt: string, parentId: string | null) => {
    const createdGuessing = await guessingApi.createGuessing(author, prompt, parentId);
    setOutputGuessing(createdGuessing);
  }, []);

  const queryOutputGuessing = useCallback(async (id: string) => {
    const returnedOutputGuessing = await guessingApi.getGuessing(id);
    setOutputGuessing(returnedOutputGuessing);
  }, []);

  useEffect(() => {
    if (!outputGuessing) {
      return;
    }
    if (outputGuessing.isReady()) {
      return;
    }
    setTimeout(() => {
      queryOutputGuessing(outputGuessing.getId());
    }, 2000);
  }, [outputGuessing]);

  const queryGuessing = useCallback(async (id: string) => {
    const returnedGuessing = await guessingApi.getGuessing(id);
    setGuessing(returnedGuessing);
  }, []);

  useEffect(() => {
    if (!guessing) {
      return;
    }
    if (guessing.isReady()) {
      return;
    }
    setTimeout(() => {
      queryGuessing(guessing.getId());
    }, 2000);
  }, [guessing]);

  const queryGuessingNode = useCallback(async (id: string) => {
    const returnedGuessingNode = await guessingApi.getGuessingTree(id);
    setGuessingNode(returnedGuessingNode);
  }, []);

  useEffect(() => {
    if (!guessingNode) {
      return;
    }
    setTimeout(() => {
      queryGuessingNode(guessingNode.getId());
    }, 2000);
  });

  const guessingContextValue: GuessingContextValue = useMemo(
    () => ({
      guessing,
      outputGuessing,
      guessingNode,
      createGuessing,
      queryGuessing,
      queryGuessingNode,
    }),
    [guessing, outputGuessing, guessingNode, createGuessing, queryGuessing, queryGuessingNode]
  );

  return <GuessingContext.Provider value={guessingContextValue}>{children}</GuessingContext.Provider>;
}

export default GuessingContext;
