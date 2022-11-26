type GuessingEntityDto = {
  id: string;
  parent_id: string | null;
  state: string;
  image_url: string;
  author: string;
  prompt: string;
};

type CreateGuessingRequestBody = {
  author: string;
  prompt: string;
  parent_id: string | null;
};

export type { GuessingEntityDto, CreateGuessingRequestBody };
