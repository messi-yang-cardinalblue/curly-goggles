import GuessingEntity from './GuessingEntity';

export default class GuessingNodeEntity {
  private guessing: GuessingEntity;

  private parent: GuessingNodeEntity | null;

  private children: GuessingNodeEntity[];

  constructor(guessing: GuessingEntity) {
    this.guessing = guessing;
    this.parent = null;
    this.children = [];
  }

  static newGuessingEntity(guessing: GuessingEntity) {
    return new GuessingNodeEntity(guessing);
  }

  public isEqual(guessingNode: GuessingNodeEntity): Boolean {
    return guessingNode.getId() === this.getId();
  }

  public hasParent(): boolean {
    return !!this.parent;
  }

  public getParentId(): string | null {
    return this.guessing.getParentId();
  }

  public getId(): string {
    return this.guessing.getId();
  }

  public getAuthor(): string {
    return this.guessing.getAuthor();
  }

  public getImageUrl(): string | null {
    return this.guessing.getImageUrl();
  }

  public getPrompt(): string {
    return this.guessing.getPrompt();
  }

  public setParent(parentGuessingNode: GuessingNodeEntity) {
    this.parent = parentGuessingNode;
  }

  public childrenCount(): number {
    return this.children.length;
  }

  public getSiblingPos(): number {
    if (!this.parent) {
      return -1;
    }
    const siblings = this.parent.getChildren();
    return siblings.findIndex((sibling) => sibling === this);
  }

  public hasSiblings(): boolean {
    if (!this.parent) {
      return false;
    }
    return this.parent.childrenCount() > 1;
  }

  public hasLeftSibling(): boolean {
    if (!this.parent) {
      return false;
    }
    return this.getSiblingPos() > 0;
  }

  public hasRighSibling(): boolean {
    if (!this.parent) {
      return false;
    }
    return this.getSiblingPos() < this.parent.childrenCount() - 1;
  }

  public appendChild(guessingNode: GuessingNodeEntity) {
    this.children = [...this.children, guessingNode];
  }

  public getChildren(): GuessingNodeEntity[] {
    return this.children;
  }

  public hasChildren(): boolean {
    return this.children.length > 0;
  }
}
