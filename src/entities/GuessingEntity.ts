export default class GuessingEntity {
  private id: string;

  private parentId: string | null;

  private rootId: string;

  private hint: string;

  private state: 'pending' | 'processing' | 'succeeded';

  private imageUrl: string | null;

  private author: string;

  private prompt: string;

  constructor(
    id: string,
    parentId: string | null,
    rootId: string,
    hint: string,
    state: 'pending' | 'processing' | 'succeeded',
    imageUrl: string | null,
    author: string,
    prompt: string
  ) {
    this.id = id;
    this.parentId = parentId;
    this.rootId = rootId;
    this.hint = hint;
    this.state = state;
    this.imageUrl = imageUrl;
    this.author = author;
    this.prompt = prompt;
  }

  static newGuessingEntity(
    id: string,
    parentId: string | null,
    rootId: string,
    hint: string,
    state: 'pending' | 'processing' | 'succeeded',
    imageUrl: string | null,
    author: string,
    prompt: string
  ) {
    return new GuessingEntity(id, parentId, rootId, hint, state, imageUrl, author, prompt);
  }

  public isEqual(guessing: GuessingEntity): Boolean {
    return guessing.getId() === this.id;
  }

  public getId(): string {
    return this.id;
  }

  public getParentId(): string | null {
    return this.parentId;
  }

  public getRootId(): string {
    return this.rootId;
  }

  public getHint(): string {
    return this.hint;
  }

  public getState(): string {
    return this.state;
  }

  public getImageUrl(): string | null {
    return this.imageUrl;
  }

  public getAuthor(): string {
    return this.author;
  }

  public getPrompt(): string {
    return this.prompt;
  }

  public isReady(): boolean {
    return this.state === 'succeeded';
  }
}
