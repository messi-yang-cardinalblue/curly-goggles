import GuessingEntity from '@/entities/GuessingEntity';

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

export const convertGuessingEntityDtoToGuessingEntity = (dto: GuessingEntityDto) =>
  GuessingEntity.newGuessingEntity(dto.id, dto.parent_id, dto.state, dto.image_url, dto.author, dto.prompt);

export type { GuessingEntityDto, CreateGuessingRequestBody };
