type GuessingEntityDto = {
  id: string;
  parent_id: string | null;
  state: 'pending' | 'processing' | 'succeeded';
  image_url: string | null;
  author: string;
  prompt: string;
};

type CreateGuessingRequestBody = {
  author: string;
  prompt: string;
  parent_id: string | null;
};

export type { GuessingEntityDto, CreateGuessingRequestBody };
