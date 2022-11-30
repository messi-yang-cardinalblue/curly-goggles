import GuessingEntity from '@/entities/GuessingEntity';

type GuessingEntityDto = {
  id: string;
  parent_id: string | null;
  root_id: string;
  hint: string;
  state: 'pending' | 'processing' | 'succeeded' | 'failed';
  image_url: string | null;
  author: string;
  prompt: string;
};

type CreateGuessingRequestBody = {
  author: string;
  prompt: string;
  parent_id: string | null;
};

export const convertGuessingEntityDtoToGuessingEntity = (dto: GuessingEntityDto) =>
  GuessingEntity.newGuessingEntity(
    dto.id,
    dto.parent_id,
    dto.root_id,
    dto.hint,
    dto.state,
    dto.image_url,
    dto.author,
    dto.prompt
  );

export type { GuessingEntityDto, CreateGuessingRequestBody };
