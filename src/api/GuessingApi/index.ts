import GuessingEntity from '@/entities/GuessingEntity';
import { GuessingEntityDto, CreateGuessingRequestBody } from './dto';

// @ts-ignore-start
export default class GuessingApi {
  static createGuessingApi() {
    return new GuessingApi();
  }

  public createGuessing(author: string, prompt: string, parentId: string | null) {
    const requestBody: CreateGuessingRequestBody = {
      author,
      prompt,
      parent_id: parentId,
    };
    console.log(this, requestBody);
    // Do your create guessing request here!
  }

  public async getGuessing(id: string): Promise<GuessingEntity> {
    console.log(this, id);
    // Do your query guessing request here!
    const mockUpGuessingEntityDto: GuessingEntityDto = {
      id: '123',
      parent_id: '123',
      state: 'processing',
      image_url: 'https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=730&crop=1',
      author: 'Messi',
      prompt: 'Hello World',
    };

    const guessing = GuessingEntity.newGuessingEntity(
      mockUpGuessingEntityDto.id,
      mockUpGuessingEntityDto.parent_id,
      mockUpGuessingEntityDto.state,
      mockUpGuessingEntityDto.image_url,
      mockUpGuessingEntityDto.author,
      mockUpGuessingEntityDto.prompt
    );
    return guessing;
  }
}
// @ts-ignore-end
