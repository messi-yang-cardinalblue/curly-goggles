import GuessingEntity from '@/entities/GuessingEntity';

// @ts-ignore-start
export default class GuessingApi {
  static createGuessingApi() {
    return new GuessingApi();
  }

  public createGuessing(author: string, prompt: string, parentId: string | null) {
    console.log(this, author, prompt, parentId);
    // Do your create guessing request here!
  }

  public getGuessing(id: string) {
    console.log(this, id);
    // Do your query guessing request here!

    const guessing = GuessingEntity.newGuessingEntity('id', 'parentId', 'state', 'imageUrl', 'author', 'prompt');
    return guessing;
  }
}
// @ts-ignore-end
